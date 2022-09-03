-- CreateTable
CREATE TABLE "ExampleEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "public" BOOLEAN DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "ExampleRelatedEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT
);

-- CreateTable
CREATE TABLE "_ExampleEntityRelatives" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_ExampleEntityRelatives_A_fkey" FOREIGN KEY ("A") REFERENCES "ExampleEntity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ExampleEntityRelatives_B_fkey" FOREIGN KEY ("B") REFERENCES "ExampleRelatedEntity" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "ExampleEntity_name_key" ON "ExampleEntity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ExampleEntityRelatives_AB_unique" ON "_ExampleEntityRelatives"("A", "B");

-- CreateIndex
CREATE INDEX "_ExampleEntityRelatives_B_index" ON "_ExampleEntityRelatives"("B");
