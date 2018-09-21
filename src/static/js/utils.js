export const showTabBar = (pathname) => {
    const pathnames = ['/home', '/navVideo', '/my', '/friend']
    return pathnames.findIndex(item => item === pathname) === -1 ? false : true;
}

export const formatPlayCount = (playCount) => {
    if(playCount >= 10000) {
        return `${Math.ceil(playCount / 10000)}万`
    } else {
        return playCount
    }
}