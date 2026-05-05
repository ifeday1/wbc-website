import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Giving - Winners Baptist Church',
  description: 'Give towards the ministry of Winners Baptist Church, Bariga',
};

export default function Giving() {
  return (
    <div>
      <div className="relative pt-20">
        <Image src="/church.webp" alt="church" width={1600} height={400} className="w-full h-[400px] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center bg-black/30">
          <div className="text-center text-white pt-24">
            <h2 className="text-xl md:text-4xl font-bold">GIVING</h2>
          </div>
        </div>
      </div>

      <div className="p-8 max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-blue-600 text-center mb-6">Support Our Ministry</h3>
        <p className="text-gray-700 text-center mb-8">
          We believe in the principle of sowing and reaping. Your generous giving helps further the kingdom of God and supports the work of Winners Baptist Church.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Tithe</h4>
            <p className="text-gray-600">Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." - Malachi 3:10</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Offering</h4>
            <p className="text-gray-600">Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver. - 2 Corinthians 9:7</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-600 mb-4"> seed</h4>
            <p className="text-gray-600">Bring the whole tithe into the storehouse, that there may be food in my house. Test me in this," says the Lord Almighty, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it." - Malachi 3:10</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Building Fund</h4>
            <p className="text-gray-600">Help us build the house of God and expand our ministry to reach more souls for Christ.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <h4 className="text-xl font-bold text-blue-600 mb-4">Contact Us to Give</h4>
          <p className="text-gray-600 mb-4">For more information on how to give, please contact us.</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}