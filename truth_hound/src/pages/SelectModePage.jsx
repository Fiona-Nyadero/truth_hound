import { Link } from 'react-router-dom'
import Button from '../components/Button'

function SelectModePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
                Select Game mode
            </h2>
            <div className="flex gap-4 mt-6">
                <Link to="/single-player">
                    <Button>Single Player</Button>
                </Link>
                <Link to="/multiplayer">
                    <Button>Multipalyer</Button>
                </Link>
            </div>         
        </div>
    )
}

export default SelectModePage