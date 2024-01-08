const videos = [
    {
        name: 'ReactJS',
        duration: 30,
        id: 1,
    },
    {
        name: 'Basic React',
        duration: 30,
        id: 2,
    },
    {
        name: 'map or forEach',
        duration: 25,
        id: 3,
    },
]

export function VideoList() {
    return (
        <>
            <h1>Video list</h1>
            {
                videos.map((video) => {
                    return (
                        <div key={video.id}>
                            <p>{video.name}</p>
                            <p>{video.duration}</p>
                            <button>Лайк</button>
                        </div>
                    )
                })
            }
        </>
    )
}