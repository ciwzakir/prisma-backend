-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userRole" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "biofeature" (
    "id" SERIAL NOT NULL,
    "bioId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "biofeature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fullname" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nameId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fullname_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "zipCode" TEXT NOT NULL,
    "addressId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "qualifications" (
    "id" SERIAL NOT NULL,
    "qualification" TEXT NOT NULL,
    "fieldOfStudy" TEXT NOT NULL,
    "instituteName" TEXT NOT NULL,
    "graduationYear" INTEGER NOT NULL,
    "obtainGrade" TEXT NOT NULL,
    "educationId" INTEGER NOT NULL,

    CONSTRAINT "qualifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personalInformations" (
    "id" SERIAL NOT NULL,
    "age" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "personalInfoId" INTEGER NOT NULL,

    CONSTRAINT "personalInformations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "postscategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "postscategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productcategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "productcategories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productbrands" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "productbrands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productsuppliers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "productsuppliers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "productImageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "warranty" INTEGER NOT NULL,
    "stockStatus" BOOLEAN DEFAULT true,
    "productCategoryId" TEXT NOT NULL,
    "productBrandId" TEXT NOT NULL,
    "productSupplierId" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isPublished" BOOLEAN DEFAULT false,
    "paymentStatus" TEXT,
    "salesStatus" TEXT,
    "isItemSupplierVerified" BOOLEAN DEFAULT true,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productratings" (
    "id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "productRatingsId" TEXT NOT NULL,

    CONSTRAINT "productratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "productreviews" (
    "id" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "productReviewId" TEXT NOT NULL,

    CONSTRAINT "productreviews_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_userId_key" ON "profiles"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "biofeature_bioId_key" ON "biofeature"("bioId");

-- CreateIndex
CREATE UNIQUE INDEX "fullname_nameId_key" ON "fullname"("nameId");

-- CreateIndex
CREATE UNIQUE INDEX "address_addressId_key" ON "address"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "personalInformations_personalInfoId_key" ON "personalInformations"("personalInfoId");

-- CreateIndex
CREATE UNIQUE INDEX "postscategories_name_key" ON "postscategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "productcategories_name_key" ON "productcategories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "productbrands_name_key" ON "productbrands"("name");

-- CreateIndex
CREATE UNIQUE INDEX "productsuppliers_name_key" ON "productsuppliers"("name");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "biofeature" ADD CONSTRAINT "biofeature_bioId_fkey" FOREIGN KEY ("bioId") REFERENCES "profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fullname" ADD CONSTRAINT "fullname_nameId_fkey" FOREIGN KEY ("nameId") REFERENCES "biofeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "biofeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "qualifications" ADD CONSTRAINT "qualifications_educationId_fkey" FOREIGN KEY ("educationId") REFERENCES "biofeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personalInformations" ADD CONSTRAINT "personalInformations_personalInfoId_fkey" FOREIGN KEY ("personalInfoId") REFERENCES "biofeature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "postscategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productCategoryId_fkey" FOREIGN KEY ("productCategoryId") REFERENCES "productcategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productBrandId_fkey" FOREIGN KEY ("productBrandId") REFERENCES "productbrands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_productSupplierId_fkey" FOREIGN KEY ("productSupplierId") REFERENCES "productsuppliers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "products" ADD CONSTRAINT "products_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productratings" ADD CONSTRAINT "productratings_productRatingsId_fkey" FOREIGN KEY ("productRatingsId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productreviews" ADD CONSTRAINT "productreviews_productReviewId_fkey" FOREIGN KEY ("productReviewId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
