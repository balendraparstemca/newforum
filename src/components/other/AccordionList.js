import React, {Component} from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { FaPlus, FaMinus } from 'react-icons/fa'

class AccordionList extends Component {
    state = {
        items: [
            {
                title: 'What is a novel coronavirus?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Can I create a free listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'How much time does it take to get approval?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Do I have to commit to a yearly subscription?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Is my listing secure?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'How can i Delete listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'What is listing site?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: 'mb-3'
            },
            {
                title: 'Why people chose this listing?',
                desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text',
                plus: <FaPlus />,
                minus: <FaMinus />,
                cardClass: ''
            },
        ]
    }
    render() {
        return (
            <>
                <Accordion className="accordion accordion-item pr-4" id="accordionExample">

                    {this.state.items.map((item, i) => {
                        return (
                            <div className={'card ' + item.cardClass} key={i}>
                                <AccordionItem>
                                    <AccordionItemHeading className="card-header">
                                        <AccordionItemButton className="btn btn-link d-flex align-items-center justify-content-between">
                                            {item.title}
                                            <i className="minus">{item.minus}</i>
                                            <i className="plus">{item.plus}</i>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <div className="card-body">
                                            {item.desc}
                                        </div>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            </div>
                        )
                    })}

                </Accordion>
            </>
        );
    }
}

export default AccordionList;