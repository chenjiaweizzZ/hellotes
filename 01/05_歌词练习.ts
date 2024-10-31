type LyricType = {
    time: string,
    text: string
}

function parseLyric(lyric: string) {
    let lyrics: Array<LyricType> = []
    lyrics.push({ time: "11:09", text: lyric })
    return lyrics
}

console.log(parseLyric("天青色等烟雨"))