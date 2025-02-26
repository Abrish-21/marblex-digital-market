import Button from '../components/Button';
import { Accordion, AccordionTab } from 'primereact/accordion';

const FAQ = () => {
  return (
    <div className="lg:p-20 p-4">
      <div className="lg:mt-20 flex flex-col lg:flex-row gap-6 lg:gap-80">
        <div className="lg:mr-[2rem]">
          <p className="line-before mb-4 font-BebasNeueStatic text-[#fb923c]">OUR CLIENT</p>
          <p className="lg:text-4xl text-2xl text-gray-900 font-BebasNeueStatic">We've Got What You Asked For</p>
        </div>
        <Button text="View More" />
      </div>
      <div className="card lg:pt-20 pt-10 lg:w-auto w-[26rem] lg:pr-0 pr-10">
        <Accordion activeIndex={0}>
          <AccordionTab header="What Are The Different Types Of Marble?" className="text-xs lg:text-lg">
            <p className="m-0 text-xs lg:text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </AccordionTab>
          <AccordionTab header="Are Marbles Strong?" className="text-xs lg:text-lg">
            <p className="m-0 text-xs lg:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
              sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </AccordionTab>
          <AccordionTab header="Which Type of Marble is Good for Kitchen Cabinets?" className="text-xs lg:text-lg">
            <p className="m-0 text-xs lg:text-lg">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
              quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
              mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
              Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </p>
          </AccordionTab>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;