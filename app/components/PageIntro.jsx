import clsx from 'clsx';

import { Container } from './Container';
import { FadeIn } from './FadeIn';

export function PageIntro({ title, children, centered = false }) {
   return (
      <Container
         className={clsx('mt-24 sm:mt-32 lg:mt-40', centered && 'text-center')}
      >
         <FadeIn>
            <h1>
               <span
                  className={clsx(
                     'font-display mt-6 block max-w-5xl text-balance text-5xl font-medium tracking-tight text-neutral-950 sm:text-6xl',
                     centered && 'mx-auto'
                  )}
               >
                  {title}
               </span>
            </h1>
            <div
               className={clsx(
                  'mt-6 max-w-3xl text-balance text-xl text-neutral-600',
                  centered && 'mx-auto'
               )}
            >
               {children}
            </div>
         </FadeIn>
      </Container>
   );
}
