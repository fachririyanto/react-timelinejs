import {
    useRef,
    useEffect,
    useState
} from 'react'

const timelineConfig = {
    start_at_slide: false,
    initial_zoom: -10,
    duration: 300,
    dragging: false,
    default_bg_color: '#000',
}

const events = [
    {
        "start_date": {
            "year": "2005",
            "month": "4",
            "day": "23"
        },
        "text": {
            "headline": "BINUS University Profile",
            "text": "<a href='#' class='button-show-post button button-orange'>Lihat Lebih Lengkap</a>"
        },
        "background": {
            "url": "https://i.ytimg.com/vi/AwK49ebiIiU/maxresdefault.jpg",
            "caption": "The first video on YouTube",
            "credit": "Jawed"
        },
    },
    {
        "start_date": {
            "year": "2005",
            "month": "5",
            "day": "23"
        },
        "text": {
            "headline": "#Liputan - BINUS University, Universitas Terbaik Se-Asia Tenggara",
            "text": "<a href='#' class='button-show-post button button-orange'>Lihat Lebih Lengkap</a>"
        },
        "background": {
            "url": "https://i.ytimg.com/vi/nUO2tqjEeAk/maxresdefault.jpg",
            "caption": "The first video on YouTube",
            "credit": "Jawed"
        },
    },
]

export default function App() {
    const [isLoading, setIsLoading] = useState(true)

    const timelineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsLoading(false)

        if (timelineRef.current && !isLoading) {
            new window.TL.Timeline(
                timelineRef.current,
                { events: events },
                timelineConfig
            )
        }
    }, [isLoading])

    return (
        <div ref={ timelineRef } id="timeline-embed" style={{
            width: '100vw',
            height: '100vh',
        }}></div>
    )
}