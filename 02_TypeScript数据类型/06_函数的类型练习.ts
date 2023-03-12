// 定义对象类型
type LyricType = {
    time: number,
    text: string
}

// 歌词解析工具
function parseLyric(lyric: string): LyricType[] {
    const lyrics: LyricType[] = []
    lyrics.push({ time: 111, text: "天空下雨" })
    return lyrics
}

const lyricInfos = parseLyric("ManbaOut")
for (const item of lyricInfos) {
    // 书写变得更加安全了
    console.log(item.time, item.text)
}


export {  } 