import { Link } from 'react-router-dom'
import Button from '../components/Button'

function SelectModePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                Select Game Mode
            </h2>
            <div className="flex gap-4 mt-6">
                <Link to="/single-player">
                    <Button className="hover:scale-120 transition-transform duration-300">
                        ✨ Single Player (vs AI)
                    </Button>
                </Link>
                <Link to="/multiplayer">
                    <Button className="hover:scale-120 transition-transform duration-300">
                        🤝 Multi-Player (vs Friends)
                    </Button>
                </Link>
            </div>
        </div>
    )

    //1
    //2
}

export default SelectModePage