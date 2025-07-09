-- CreateTable
CREATE TABLE "url_directory" (
    "id" SERIAL NOT NULL,
    "original_url" TEXT NOT NULL,
    "short_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "url_directory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "url_directory_short_url_key" ON "url_directory"("short_url");

-- CreateIndex
CREATE INDEX "url_directory_short_url_idx" ON "url_directory"("short_url");
