import React from "react";
import { BottomFotter, Footerwrapper, Maindiv, TypoPara } from "./Footer.styled";


interface FooterItem {
  id: number;
  title: string;
  description?: string;
  main?: string;
  submain?: string;
  sub?: string;
  subtitle?: string;
  text?: string;
  image?: {
    data?: Array<{
      attributes: {
        url: string;
        alternativeText?: string;
      };
    }>;
  };
}

interface FooterComponentProps {
  footerData: FooterItem[];
}

const FooterComponent: React.FC<FooterComponentProps> = ({ footerData }) => {
  console.log("footer", footerData);

  if (!footerData) {
    return null;
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="body-gap">
      <Footerwrapper>
        {footerData.map((item) => {
          const { image, title, description, main, submain, sub, subtitle, text } = item;

          return (

            <Maindiv key={item.id}>
              {title !== 'Funiro.' ? (
                <p>{title}</p>
              ) : null}
              {title === "Funiro." ? (
                image?.data?.[0]?.attributes?.url && (
                  <>
                    <img
                      src={image.data[0].attributes.url}
                      alt={image.data[0].attributes.alternativeText || title}
                    />

                    {description && <p>{description}</p>}
                  </>
                )
              ) : (
                <>
                  <ul>
                    {main && <li><h4>{main}</h4></li>}
                    {submain && <li><h4>{submain}</h4></li>}
                    {sub && <li><h4>{sub}</h4></li>}
                    {subtitle && <li><h4>{subtitle}</h4></li>}

                    {text && <li>
                      <input type="text" placeholder="Enter Your Email Address"/>
                      <h5>{text}</h5>
                    </li>}
                  </ul>
                </>
              )}
            </Maindiv>
          );
        })}
      </Footerwrapper>
      <hr />
      <BottomFotter>
        <TypoPara>{currentYear} furino. All rights reverved</TypoPara>
      </BottomFotter>
    </div>
  );
};

export default FooterComponent;
