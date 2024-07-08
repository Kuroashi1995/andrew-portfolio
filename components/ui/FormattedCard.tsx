"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/Card";
import Link from "next/link";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { FaLocationArrow } from "react-icons/fa";

export function FormattedCard({
  id,
  title,
  des,
  img,
  iconLists,
  link,
}: {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
}) {
  return (
    <CardContainer className="inter-var" key={id}>
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {des}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl border border-white/[0.1]"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            className="flex items-center justify-between mt-7 mb-3"
          >
            <div className="flex items-center">
              {iconLists.map((icon, index) => (
                <div
                  key={icon}
                  className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: `translateX(-${5 * index * 2}px)` }}
                >
                  <img src={icon} alt={icon} className="p-2" />
                </div>
              ))}
            </div>
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white flex justify-center items-center"
          >
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Check it out
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
