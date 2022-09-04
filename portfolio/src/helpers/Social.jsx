import React from "react";

export const Social = () => {
  const social = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/jackiewicz-daniel/",
    },
    {
      name: "github",
      href: "https://github.com/danieljackiewicz",
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/do.eat.now",
    },
    {
      name: "whatsapp",
      href: "https://wa.me/0048510795432?text=Chat with Daniel",
    },
    {
      name: "telegram",
      href: "https://t.me/danjack888",
    },
  ];

  return (
    <>
      <div className="intro__social">
        {social.map((socialArr, index) => {
          return (
            <a
              key={index}
              href={socialArr.href}
              target="_blank"
              alt={socialArr.name}
            >
              <i
                className={`fa-brands fa-flip fa-xl fa-${socialArr.name}`}
                style={{ "--fa-animation-duration": "4s" }}
              />
            </a>
          );
        })}
      </div>
    </>
  );
};
