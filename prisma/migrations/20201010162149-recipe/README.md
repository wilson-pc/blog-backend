# Migration `20201010162149-recipe`

This migration has been generated by wilson-pc at 10/10/2020, 12:21:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "people" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "videoId" TEXT,

    FOREIGN KEY ("videoId") REFERENCES "Video"("id") ON DELETE SET NULL ON UPDATE CASCADE,
PRIMARY KEY ("id")
)

CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "recipeId" TEXT,

    FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE,
PRIMARY KEY ("id")
)

CREATE TABLE "Step" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
PRIMARY KEY ("id")
)

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Imagen" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "stepId" TEXT,

    FOREIGN KEY ("stepId") REFERENCES "Step"("id") ON DELETE SET NULL ON UPDATE CASCADE,
PRIMARY KEY ("id")
);
INSERT INTO "new_Imagen" ("id", "name", "format") SELECT "id", "name", "format" FROM "Imagen";
DROP TABLE "Imagen";
ALTER TABLE "new_Imagen" RENAME TO "Imagen";
CREATE UNIQUE INDEX "Imagen.name_unique" ON "Imagen"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON

CREATE UNIQUE INDEX "Recipe_videoId_unique" ON "Recipe"("videoId")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201002131438-video-image..20201010162149-recipe
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -63,31 +63,60 @@
 }
 model Video {
-  id    String @id @default(uuid())
-  name  String @unique
+  id     String  @id @default(uuid())
+  name   String  @unique
   format String
-  hls Boolean @default(false)
+  hls    Boolean @default(false)
+  Recipe Recipe?
 }
-model Imagen{
-   id    String @id @default(uuid())
-  name  String @unique
+
+model Imagen {
+  id     String @id @default(uuid())
+  name   String @unique
   format String
- 
+
+  Step   Step?   @relation(fields: [stepId], references: [id])
+  stepId String?
 }
-model Video2{
-   id    String @id @default(uuid())
-   name  String @unique
-  web Boolean @default(false)
+
+model Video2 {
+  id          String       @id @default(uuid())
+  name        String       @unique
+  web         Boolean      @default(false)
   resolutions Resolution[]
 }
-model Resolution{
-   id    String @id @default(uuid())
-   name  String @unique
-   videoId String
-   video Video2 @relation(fields: [videoId], references: [id])
+model Resolution {
+  id      String @id @default(uuid())
+  name    String @unique
+  videoId String
+  video   Video2 @relation(fields: [videoId], references: [id])
 }
+
+model Recipe {
+  id          String       @id @default(uuid())
+  name        String
+  people      String
+  description String
+  video       Video?       @relation(fields: [videoId], references: [id])
+  ingredients Ingredient[]
+  videoId     String?
+}
+
+model Ingredient {
+  id       String  @id @default(uuid())
+  name     String
+  Recipe   Recipe? @relation(fields: [recipeId], references: [id])
+  recipeId String?
+
+}
+
+model Step {
+  id     String   @id @default(uuid())
+  name   String
+  images Imagen[]
+}
```

