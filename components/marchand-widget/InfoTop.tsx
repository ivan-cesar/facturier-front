import React from 'react';
import Message from "../../public/icon-svg/Message.svg";
import Profile from "../../public/icon-svg/profile-2user.svg";
import ProfileCheck from "../../public/icon-svg/profile-tick.svg";
import Laptop from "../../public/icon-svg/monitor.svg";
import User1 from "../../public/icon-svg/user-1.svg";
import User2 from "../../public/icon-svg/user-2.svg";
import User3 from "../../public/icon-svg/user-3.svg";
import User4 from "../../public/icon-svg/user-4.svg";
import User5 from "../../public/icon-svg/user-5.svg";

import { Separator } from "@/components/ui/separator"

const InfoTop: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-between p-4 bg-white rounded-lg shadow-md mt-9">

            <div className='w-full'>
                <div className="flex justify-between">
                    <div className="flex items-center gap-2 w-[300px]">
                        <div className="w-[84px] h-[84px] p-2 bg-icon rounded-full flex justify-center items-center">
                            <Profile className="w-[42px] h-[42px]" />
                        </div>

                        <div>
                            <span className="text-[14px] text-[#ACACAC] font-[400]">Total Utilisateurs</span>
                            <p className=" font-[600] text-[32px]">
                                5423
                            </p>
                        </div>
                    </div>
                   <Separator orientation="vertical"  className='border border-gray-200 h-[84px] mx-4'/>
                    <div className="flex items-center gap-2 w-[300px]">
                        <div className="w-[84px] h-[84px] p-2 bg-icon rounded-full flex justify-center items-center">
                            <ProfileCheck className="w-[42px] h-[42px]" />
                        </div>
                        <div>
                            <span className="text-[14px] text-[#ACACAC] font-[400]">Utilisateurs inactifs</span>
                            <p className=" font-[600] text-[32px]">
                                1893
                            </p>
                        </div>
                    </div>
                    <Separator orientation="vertical" className='border border-gray-200 h-[84px] mx-4'/>
                    <div className="flex items-center gap-2 w-[300px]">
                        <div className="w-[84px] h-[84px] p-2 bg-icon rounded-full flex justify-center items-center">
                            <Laptop className="w-[42px] h-[42px]" />
                        </div>
                        <div>
                            <span className="text-[14px] text-[#ACACAC] font-[400]">Utilisateurs actifs</span>
                            <p className=" font-[600] text-[32px]">
                                1890
                            </p>
                            <div className='flex flex-row gap-0'>
                            <User1 className="w-[30px] h-[30px]" />
                            <User2 className="w-[30px] h-[30px] relative top-[21.6%] left-[-4%]" />
                            <User3 className="w-[30px] h-[30px] relative top-[21.6%] left-[-8%]" />
                            <User4 className="w-[30px] h-[30px] relative top-[21.6%] left-[-12%]" />
                            <User5 className="w-[30px] h-[30px] relative top-[21.6%] left-[-17%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoTop;
