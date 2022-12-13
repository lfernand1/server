CREATE TABLE "TheUser" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "TheUser"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "TheUser"("email");
