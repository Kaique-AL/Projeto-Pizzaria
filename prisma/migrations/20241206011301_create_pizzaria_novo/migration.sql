-- CreateTable
CREATE TABLE "subcategorias" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subcategorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToSubCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CategoryToSubCategory_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CategoryToSubCategory_B_index" ON "_CategoryToSubCategory"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToSubCategory" ADD CONSTRAINT "_CategoryToSubCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToSubCategory" ADD CONSTRAINT "_CategoryToSubCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "subcategorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
