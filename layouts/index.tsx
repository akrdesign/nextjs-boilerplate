import { Ref, FC } from 'react'

type LayoutProps = {
  children?: React.ReactNode;
  containerRef?: Ref<HTMLDivElement>
}

const Layouts: FC<LayoutProps> = ({ children, containerRef }: LayoutProps) => {
  return (
    <div ref={containerRef} data-scroll-container>
      <main>{children}</main>
    </div>
  )
}

export default Layouts