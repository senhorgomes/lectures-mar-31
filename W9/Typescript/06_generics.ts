interface GeneratedImage<type> {
  path: string;
  size: number;
  error:type;
}

const phaseOne: GeneratedImage<string> = {}
const phaseTwo: GeneratedImage<boolean> = {}
const phaseThree: GeneratedImage<number> = {}