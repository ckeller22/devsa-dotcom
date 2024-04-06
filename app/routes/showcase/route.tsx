import { Container } from '~/components/Container';
import { PageIntro } from '~/components/PageIntro';

export default function Index() {
   const tempData = new Array(8).fill(null);

   return (
      <>
         <PageIntro eyebrow="" title="Not so humble brag">
            <p>
               Here are some of the things our community would love to show off.
               Have something of yours you want to flaunt? Submit a pull
               request!
            </p>
         </PageIntro>

         <div>
            <Container className="mt-24 sm:mt-32 lg:mt-40">
               <h2 className="text-2xl font-bold">Showcase</h2>

               <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {tempData.map((_, index) => (
                     <div
                        key={index}
                        className="flex w-full flex-col rounded-md p-6 ring-1 ring-neutral-200"
                     >
                        <p className="flex gap-x-2 text-sm text-neutral-950">
                           <time dateTime="2022" className="font-semibold">
                              2022
                           </time>
                           <span
                              className="text-neutral-300"
                              aria-hidden="true"
                           >
                              /
                           </span>
                           <span>Software</span>
                        </p>
                        <p className="font-display mt-4 text-2xl font-semibold text-neutral-950">
                           Overcome your fears, find your match
                        </p>
                        <p className="mt-4 text-base text-neutral-600">
                           Find love in the face of fear — Phobia is a dating
                           app that matches users based on their mutual phobias
                           so they can be scared together.
                        </p>
                     </div>
                  ))}
               </div>
            </Container>
         </div>
      </>
   );
}
