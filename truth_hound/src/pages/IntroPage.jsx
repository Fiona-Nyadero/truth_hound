import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'

function IntroPage() {
    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/select-mode')
        }, 5000)
        return () => clearTimeout(timer) 
    }, [navigate])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <h1 className='text-4xl font-bold text-center'>
                Welcome to Truth Hound🐕‍🦺
            </h1>
            <p className='text-xl text-gray-700 mb-6 text-center'>Can you sniff out the lie?</p>
        </div>
    )
}
export default IntroPage