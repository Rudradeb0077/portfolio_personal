import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 100, height = 100 }) => {
    return (
        <Image
            className={`w-${width} h-${height}`}
            src="/logo_v4.png"
            alt="Logo"
            width={250}
            height={250}
        />
    );
};

export default Logo;
