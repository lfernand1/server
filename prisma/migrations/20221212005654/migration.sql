CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);


CREATE TABLE "music" (
    "id" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "music" TEXT NOT NULL,
    "writer" TEXT NOT NULL,

    CONSTRAINT "music_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "music_id_key" ON "Channel"("id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "username_fkey" FOREIGN KEY ("username") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_musics_fkey" FOREIGN KEY ("username") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE