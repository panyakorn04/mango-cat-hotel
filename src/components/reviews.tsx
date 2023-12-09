
'use client';

import React, { useRef, useState } from "react";
import Image from "next/image";
import reviews from "@/assets/json/google-review.json";
import { StarIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { twMerge } from 'tailwind-merge'

type Props = {}

const star = {
    average: 4,
    totalCount: 1000,
    counts: [
        { rating: 5, count: 930 },
        { rating: 4, count: 20 },
        { rating: 3, count: 20 },
        { rating: 2, count: 10 },
        { rating: 1, count: 20 },
    ],
    featured: [
        {
            id: 1,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
        {
            id: 1,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
        {
            id: 1,
            rating: 5,
            content: `
        <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
      `,
            author: "Emily Selman",
            avatarSrc:
                "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
        },
    ],
};

const Reviews = (props: Props) => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleClick = (direction: string) => {
        setIsMoved(true);
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo =
                direction === "left"
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            rowRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white">
            <div className="container  flex flex-col items-center w-screen pb-10">
                <h1 className="sr-only">Review data</h1>
                <h2 className="text-sm font-semibold text-gray-900  md:text-2xl" >Reviews</h2>
                <div className="mt-6 max-w-sm">
                    <dl className="space-y-3 min-w-[300px]">
                        {star.counts.map((count) => (
                            <div key={count.rating} className="flex items-center text-sm">
                                <dt className="flex flex-1 items-center">
                                    <p className="w-3 font-medium text-gray-900">
                                        {count.rating}
                                        <span className="sr-only"> star reviews</span>
                                    </p>
                                    <div
                                        aria-hidden="true"
                                        className="ml-1 flex flex-1 items-center"
                                    >
                                        <StarIcon
                                            className={twMerge(
                                                count.count > 0 ? "text-yellow-400" : "text-gray-300",
                                                "h-5 w-5 flex-shrink-0"
                                            )}
                                            aria-hidden="true"
                                        />
                                        <div className="relative ml-3 flex-1">
                                            <div className="h-3 rounded-full border border-gray-200 bg-gray-300" />
                                            {count.count > 0 ? (
                                                <div
                                                    className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400 text-gray-900"
                                                    style={{
                                                        width: `calc(${count.count} / ${star.totalCount} * 100%)`,
                                                    }}
                                                />
                                            ) : null}
                                        </div>
                                    </div>
                                </dt>
                                <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                                    {Math.round((count.count / star.totalCount) * 100)}%
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className=" space-y-0.5 md:space-y-2 container overflow-hidden">
                <div className="group relative md:ml-2">
                    <ChevronLeftIcon
                        onClick={() => handleClick("left")}
                        className={`absolute text-primary-yellow top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 ${!isMoved && "hidden"
                            }`}
                    />
                    <div
                        ref={rowRef}
                        className="flex scrollbar-hide overflow-x-scroll space-x-2.5 p-2 w-screen first-letter:"
                    >
                        {reviews.map((review) => (
                            <div
                                key={review.avatarSrc}
                                className=" ring-2 ring-primary-default p-4 space-x-2 rounded-lg "
                            >
                                <div className="flex w-80">
                                    <Image
                                        src={review.avatarSrc}
                                        alt={`${review.author}.`}
                                        className="h-12 w-12 rounded-full"
                                        width={48}
                                        height={48}
                                    />
                                    <div className="ml-4">
                                        <h1 className="text-sm font-base text-gray-900">
                                            {review.author}
                                        </h1>
                                        <div className="mt-1 flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <StarIcon
                                                    key={rating}
                                                    className={twMerge(
                                                        "text-yellow-400",
                                                        "h-5 w-5 flex-shrink-0"
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                        <p className="sr-only">5 out of 5 stars</p>
                                    </div>
                                </div>
                                <div
                                    className="mt-4 space-y-6 text-base italic text-gray-500 line-clamp-6 sm:text-sm"
                                    dangerouslySetInnerHTML={{ __html: review.content }}
                                />
                            </div>
                        ))}
                    </div>
                    <ChevronRightIcon
                        onClick={() => handleClick("right")}
                        className="absolute text-primary-yellow top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    )
}

export default Reviews