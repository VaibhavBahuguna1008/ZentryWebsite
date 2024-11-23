/* eslint-disable no-unused-vars */
import React from "react";
import Button from "./Button";
const Footer = () => {
  return (
    <div className=" w-full h-[50vw] px-[5vw] py-[6.5vw]  flex font-['FoundersGrotesk']">
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="heading">
          <h1 className="special-font !md:text-[6.2rem] w-full font-zentry !text-[13vw] !font-black !leading-[.9]"><b>U</b>niverse</h1>
          <h1 className="special-font !md:text-[6.2rem] w-full font-zentry !text-[10vw] !font-black !leading-[.9]">P<b>o</b>wered By</h1>
        </div>
        <h1 className="special-font !md:text-[6.2rem] w-full font-zentry !text-[4.5vw] !font-black !leading-[.9] text-blue-600">Zentry.</h1>
      </div>
      <div className="w-1/2 text-end overflow-hidden">
        <div className="heading" >
          <h1 className="special-font !md:text-[6.2rem] w-full font-zentry !text-[6vw] !font-black !leading-[.9] text-zinc-500">
            Follow <b>U</b>s
          </h1>
          
        </div>
        <div className="links text-[1.2vw] mt-[2vw] font-general ">
          <a className="block " href="">
            Discord
          </a>
          <a className="block " href="">
            Instagram
          </a>
          <a className="block" href="">
            Youtube
          </a>
        </div>
        <div className="heading mt-[2vw] flex" >
          <h1 className="special-font !md:text-[6.2rem] w-full font-zentry !text-[6vw] !font-black !leading-[.9] text-zinc-500">
            Eve<b>N</b>ts
          </h1>
          <h1 className="special-font !md:text-[6.2rem] w-full font-zentry !text-[6vw] !font-black !leading-[.9] text-zinc-500">
            Expl<b>o</b>re
          </h1>
          
        </div>
        
        <div className="links2 flex w-full h-full leading-[3vw] py-[3vw] text-[1.2vw] font-general">
          <div className="w-1/2">
            <a className="block underline" href="">
              202-1965 W 4th Ave Vancouver,
            </a>
            <a className="block underline" href="">
              Canada 30
            </a>
            <a className="block underline" href="">
              Chukarina St Lviv,
            </a>
            <a className="block underline" href="">
              Ukraine
            </a>
          </div>

          <div className="w-1/2 leading-[2.5vw] ">
            <a className="block " href="">
              Nexus
            </a>
            <a className="block " href="">
              Vault
            </a>
            <a className="block " href="">
              Prologue
            </a>
            <a className="block " href="">
              About
            </a>
            <a className="block " href="">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
