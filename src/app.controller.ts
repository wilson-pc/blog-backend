import {
  Controller,
  Get,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express/multer/interceptors/file.interceptor';
import { PrismaClient } from '@prisma/client';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { diskStorage } from 'multer';
import { statSync } from 'fs';
import { createReadStream, copyFileSync, mkdirSync } from 'fs';
import { readFile, renameSync } from 'fs';
import { extname } from 'path';
import { resolve } from 'path';
import { AppService } from './app.service';
import { Imagen } from './prisma/generated';
const sharp = require('sharp');
const ffmpeg = require('ffmpeg-cli');
const webp = require('webp-converter');
webp.grant_permission();
var ffprobe = require('ffprobe'),
  ffprobeStatic = require('ffprobe-static');

const prisma = new PrismaClient();

const resolutions = [
  {
    width: 426,
    height: 240,
    name: '240p',
    bitrate: '350k',
    file: resolve('hls-teamplate/240p.m3u8'),
  },
  {
    width: 640,
    height: 360,
    bitrate: '600k',
    name: '360p',
    file: resolve('hls-teamplate/360p.m3u8'),
  },
  {
    width: 854,
    height: 480,
    bitrate: '900k',
    name: '480p',
    file: resolve('hls-teamplate/480p.m3u8'),
  },
  {
    width: 1280,
    height: 720,
    name: '720p',
    bitrate: '1200k',
    file: resolve('hls-teamplate/720p.m3u8'),
  },
  {
    width: 1920,
    height: 1080,
    name: '1080p',
    bitrate: '2000k',
    file: resolve('hls-teamplate/1080p.m3u8'),
  },
];
const multerOptions = {
  storage: diskStorage({
    destination: 'images',
  }),
};

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('image/upload')
  @UseInterceptors(FileInterceptor('image', { dest: resolve('images') }))
  async uploadImage(@UploadedFile() file): Promise<Imagen> {
    console.log('todoo od do');
    let name = file.path + extname(file.originalname);
    renameSync(file.path, name);
    return await prisma.imagen.create({
      data: { name: file.filename, format: extname(file.originalname) },
    });
  }

  @Get('image/:name')
  async getHello(@Req() req: any, @Res() res: Response) {
    let name = req.params.name;
    let format = extname(name);
    let query = req.query;
    console.log(query, name);
    if (Object.keys(query).length === 0) {
      // let st = createReadStream(resolve('images/' + name));
      //res.writeHead(200, { 'Content-Type': 'image/' + format });

      res.sendFile(resolve('images/' + name));
    } else {
      Object.keys(query).forEach(key => {
        let num = Number(query[key]);
        if (isNaN(num)) {
          query[key] = query[key];
        } else {
          query[key] = num;
        }
      });

      sharp(resolve('images/' + name))
        .resize(query)
        .toFormat(query.format ? query.format : 'jpg')
        .toBuffer()
        .then(data => {
          res.type('image/webp');
          res.send(data);
        });
    }
    /* let input = resolve('media/video2.mp4');
    let ouput = resolve('media/encoded/1080p.m3u8');
    let commands = `-i "${input}" -c:a aac -strict experimental -c:v libx264 -s 1920x1080 -f hls -hls_list_size 1000000 -hls_time 10 ${ouput}`;
    ffmpeg
      .run(commands)
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
    return this.appService.getHello();*/
  }

  @Get(':name/:video')
  player(@Req() req: any, @Res() res: any) {
    var formatname = extname(req.params.name);
    var filename = resolve('uploads/' + req.params.name);
    if (formatname) {
      const path = resolve('uploads/' + req.params.name);
      const stat = statSync(path);
      const fileSize = stat.size;
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = end - start + 1;
        const file = createReadStream(path, { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunksize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        file.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        createReadStream(path).pipe(res);
      }
    } else {
      var format = extname(req.params.video);
      filename = resolve('uploads/' + req.params.name + '/' + req.params.video);
      if (format) {
        switch (format) {
          case '.m3u8':
            readFile(filename, function(err, contents) {
              res.writeHead(200, {
                'Content-Type': 'application/vnd.apple.mpegurl',
              });

              res.end(contents, 'utf-8');
            });
            break;
          case '.ts':
            res.writeHead(200, { 'Content-Type': 'video/MP2T' });
            var stream = createReadStream(filename, {
              bufferSize: 64 * 1024,
            } as any);
            stream.pipe(res);
            break;
          default:
            console.log('unknown file type: ' + format);
            res.writeHead(500);
            res.end();
        }
      }
    }
    /*
    var format = extname(req.originalUrl);
    var filename = resolve('media/encoded/' + req.params.name);

    switch (format) {
      case '.m3u8':
        readFile(filename, function(err, contents) {
          res.writeHead(200, {
            'Content-Type': 'application/vnd.apple.mpegurl',
          });

          res.end(contents, 'utf-8');
        });
        break;
      case '.ts':
        res.writeHead(200, { 'Content-Type': 'video/MP2T' });
        var stream = createReadStream(filename, {
          bufferSize: 64 * 1024,
        } as any);
        stream.pipe(res);
        break;
      default:
        console.log('unknown file type: ' + format);
        res.writeHead(500);
        res.end();
    }*/
  }
  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { dest: resolve('uploads') }))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    let name = file.path + extname(file.originalname);
    renameSync(file.path, name);
    let info = await ffprobe(name, { path: ffprobeStatic.path });
    let stream = info.streams.find(i => i.codec_type == 'video');
    mkdirSync(file.path);

    let idx = resolutions.findIndex(r => r.height == stream.height);
    let newVideo = await prisma.video.create({
      data: { name: file.filename, format: extname(file.originalname) },
    });
    for (let index = 0; index <= idx; index++) {
      const element = resolutions[index];
      let input = name;
      let ouput = ` ${file.path}/${element.name}.m3u8`;
      let commands = `-i "${input}" -c:a aac -strict experimental -c:v libx264 -s ${element.width}x${element.height} -f hls -hls_list_size 1000000 -hls_time 10 ${ouput}`;
      ffmpeg
        .run(commands)
        .then(async result => {
          console.log('nada mas');
          copyFileSync(element.file, file.path + '/video.m3u8');
          await prisma.video.update({
            where: { id: newVideo.id },
            data: { hls: true },
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
    return idx;
  }

  @Post('upload/video/web/player')
  @UseInterceptors(FileInterceptor('file', { dest: resolve('video') }))
  async uploadFile2(@UploadedFile() file) {
    let name = file.path + extname(file.originalname);

    renameSync(file.path, name);

    let newvideo = await prisma.video2.create({ data: { name: name } });
    let info = await ffprobe(name, { path: ffprobeStatic.path });
    let stream = info.streams.find(i => i.codec_type == 'video');
    mkdirSync(file.path);

    let idx = resolutions.findIndex(r => r.height == stream.height);

    for (let index = 0; index <= idx; index++) {
      const element = resolutions[index];
      let input = name;
      let ouput = ` ${file.path}/${element.name}.mp4`;
      let commands = `-i "${input}" -c:a aac -strict experimental -c:v libx264 -s ${element.width}x${element.height} -b:v ${element.bitrate} -bufsize ${element.bitrate}  ${ouput}`;
      ffmpeg
        .run(commands)
        .then(async result => {
          await prisma.video2.update({
            where: { id: newvideo.id },
            data: { resolutions: { create: { name: element.name + '.mp4' } } },
          });
          console.log('nada mas');
        })
        .catch(error => {
          console.log(error);
        });
    }
    return idx;
  }
}
