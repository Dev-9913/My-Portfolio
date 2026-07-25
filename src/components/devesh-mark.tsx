export function DeveshMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      {/* D */}
      <path
        fill="currentColor"
        d="
            M0 0h96v64H0V0Z
            M96 0h64v64H96V0Z
            M160 64h64v128h-64V64Z
            M96 192h64v64H96v-64Z
            M0 192h96v64H0v-64Z
            M0 0h64v256H0V0Z
          "
      ></path>
      {/* K */}
      <path
        fill="currentColor"
        d="
            M320 0h64v256h-64V0Z
            M448 0h64v64l-64 32V0Z
            M448 160l64 32v64h-64v-96Z
            M384 96h96v64h-96V96Z
          "
      ></path>
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M0 0h32v128H0V0ZM32 0h64v32H32V0ZM96 48h32v32H96V48ZM32 96h64v32H32V96Z"/><path fill="${color}" d="M160 0h32v128h-32V0ZM224 0h32v32l-32 16V0ZM224 80l32 16v32h-32V80ZM192 48h48v32h-48V48Z"/></svg>`;
}
