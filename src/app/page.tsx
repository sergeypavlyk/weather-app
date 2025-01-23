import Footer from '@/components/blocks/Footer';
import ForecastSection from '@/components/blocks/ForecastSection';
import Header from '@/components/blocks/Header';
import ModeSection from '@/components/blocks/ModeSection';

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-8 sm:p-10 bg-white dark:bg-black dark:text-white text-black">
            <Header />
            <main className="flex flex-col gap-8 items-center sm:items-start w-full">
                <ForecastSection />
                <ModeSection />
            </main>
            <Footer />
        </div>
    );
}
