import { Text, View } from 'react-native'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
    return (
        <SafeAreaView className="flex-1 gap-8 items-center justify-center bg-white">
            <Link href="/create" className='text-6xl text-secondary font-extrabold'>Create</Link>
            <Link href="/chatbot" className='text-6xl text-secondary font-extrabold'>Chatbot</Link>
            <Link href="/community" className='text-6xl text-secondary font-extrabold'>Community</Link>
            <Link href="/resources" className='text-6xl text-secondary font-extrabold'>Resources</Link>
            <Link href="/resources" className='text-6xl text-secondary font-extrabold'>Resources</Link>
        </SafeAreaView>
    )
}
