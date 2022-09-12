import Link from "next/link";


export default function IconLink({ link, image, text }) {
  
    return (
      <>
        <div className="iconLink">
            <Link href={link}>
                <a target="_blank" rel="noopener noreferrer">
                <img src={image} />
                <span>{text}</span>
                </a>
            </Link>
        </div>
      </>
    );
}