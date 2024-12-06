import React,{useState} from 'react';

import { Check, Plus } from 'lucide-react';
import ContactModal from './ContactModal';

const ContactSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div  className='bg-white  justify-center items-center px-60  max-sm:px-6 h-[355px]'>

    <div className="bg-secondry py-5 h-full text-center flex flex-col rounded-lg flex-start items-center">
      <h3 style={{ color: '#ad3190' }} className="text-purple-600 uppercase text-sm font-medium ">
        INTERESTED?
      </h3>
      <h2 className="text-4xl max-sm:text-3xl font-bold my-3 text-purple-950 ">
      Lets’ talk With our Experts 
      </h2>
      <button   onClick={() => setModalOpen(true)} className="bg-yellow-500 w-[230px] hover:bg-yellow-600 text-purple-950 font-semibold mt-7 py-3 px-8 rounded-md transition-colors">
      Connect with us 
      </button>
      <ContactModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* Bottom section with checkmarks */}
      <div className="bg-contactSecondry rounded-b-lg w-full mt-10 py-8 px-4">
        <p className="text-white mb-6">During our chat, we'll look at:</p>
        <div className="flex flex-col md:flex-row justify-center items-center max-sm:items-start gap-6 text-white">
          <div className="flex items-center justify-center text-center gap-2">
            <Check className="w-5 h-5" />
            <span>
Your Business
</span>
          </div>
          <div className="flex items-center justify-center text-center gap-2">
            <Check className="w-5 h-5" />
            <span>Strategies used</span>
          </div>
          <div className="flex  text-start gap-2">
            <Check className="w-5 h-5" />
            <span>Whether razo360.com is the right team for you
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default ContactSection;
