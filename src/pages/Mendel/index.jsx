import { BiographyGmendel } from "./BiographyGmendel";
import { Beginning } from "./Beginning";
import { Curiosities } from "./Curiosities";
import { TrabsAndimportance } from "./TrabsAndimportance";
import { Contribuitions } from "./Contribuitions";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VideosAndBlogs } from "./VideoAndBlogs";

const MotionSection = motion.div;

export function Mendel() {
  const [refBiography, inViewBiography] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refTrabs, inViewTrabs] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refContribuitions, inViewContribuitions] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refCuriosities, inViewCuriosities] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refVideos, inViewVideos] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Beginning />

      <MotionSection
        ref={refBiography}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewBiography ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <BiographyGmendel />
      </MotionSection>

      <MotionSection
        ref={refTrabs}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewTrabs ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <TrabsAndimportance />
      </MotionSection>

      <MotionSection
        ref={refContribuitions}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewContribuitions ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Contribuitions />
      </MotionSection>

      <MotionSection
        ref={refCuriosities}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewCuriosities ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Curiosities />
      </MotionSection>

      <MotionSection
        ref={refVideos}
        initial={{ opacity: 0, y: 50 }}
        animate={inViewVideos ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <VideosAndBlogs/>
      </MotionSection>
    </>
  );
}
