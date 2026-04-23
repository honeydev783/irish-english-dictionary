import Rive from '@rive-app/react-webgl2';

type DesktopRiveProps = {
  src: string;
  className?: string;
  stateMachines?: string | string[];
  animations?: string | string[];
  artboard?: string;
  autoplay?: boolean;
};

export default function DesktopRive({
  src,
  className = 'h-56 w-full max-w-[360px] sm:h-64 sm:max-w-[420px] lg:h-[200px] lg:w-[420px]',
  stateMachines,
  animations,
  artboard,
  autoplay = true,
}: DesktopRiveProps) {
  return (
    <div className={className}>
      <Rive
        src={src}
        stateMachines={stateMachines}
        animations={animations}
        artboard={artboard}
        autoplay={autoplay}
        className="w-full h-full"
      />
    </div>
  );
}
