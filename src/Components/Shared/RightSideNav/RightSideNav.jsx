import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone1 from "../../../assets/qZone1.png";
import QZone2 from "../../../assets/qZone2.png";
import QZone3 from "../../../assets/qZone3.png";

export default function RightSideNav() {
    return (
        <div>
            <div className='space-y-4 border p-4 rounded mb-6 bg-[#f3f3f3]'>
                <h2 className="text-xl font-bold">Login With</h2>
                <button className="btn btn-ghost btn-outline lowercase border-green-500">
                    <FaGoogle></FaGoogle>
                    Login With Google
                </button>
                <button className="btn btn-ghost btn-outline lowercase">
                    <FaGithub></FaGithub>
                    Login With Github
                </button>
            </div>

            <div className='border p-4 rounded mb-6 bg-[#f3f3f3]'>
                <h2 className="text-xl font-bold mb-5">Find Us</h2>
               <a href="" className='flex items-center gap-3 border-2 p-3 rounded-t-lg'>
                <FaFacebook></FaFacebook>
                <span>Facebook</span>
               </a>
               <a href="" className='flex items-center gap-3 border-x-2 p-3'>
                <FaTwitter></FaTwitter>
                <span>Twitter</span>
               </a>
               <a href="" className='flex items-center gap-3 border-2 p-3 rounded-b-lg'>
                <FaInstagram></FaInstagram>
                <span>Instagram</span>
               </a>
            </div>


            <div className='border p-4 rounded mb-6 bg-[#f3f3f3]'>
                <h2 className="text-xl font-bold mb-5">Q Zone</h2>
               <img src={QZone1} alt="" />
               <img src={QZone2} alt="" />
               <img src={QZone3} alt="" />
            </div>
        </div>
    )
}
