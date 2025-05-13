import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.linkedin} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Software Developer!</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Software Engineer with a passion for AI and Machine Learning,
          experienced in developing intelligent systems, seeking full-time
          opportunities in SWE and AI/ML development roles.
        </p>
      </div>
    </section>
  );
}
