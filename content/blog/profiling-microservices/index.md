---
title: 'Four tips for conducting reproducible systems research'
date: '2026-04-20'
description: '30 hours of debugging in three minutes'
type: 'blog'
featuredImage: 'jaeger_dashboard.png'
tags: ['Distributed Systems']
---

The tech industry is working hard to make datacenters - the windowless buildings powering every online purchase, post, and prompt - more energy efficient. My team felt inspired to do our part for our final course project in **CS8803: Datacenter Networks and Systems** at Georgia Tech. Because [launching a datacenter into space](https://www.npr.org/2026/04/03/nx-s1-5718416/ai-data-centers-in-space-spacex-elon-musk) or [dropping one in the ocean](https://news.microsoft.com/source/features/sustainability/project-natick-underwater-datacenter/) was out of scope for the course, we chose to focus on a more practical approach to achieving energy efficiency: clever _load balancing algorithms_ that distribute work amongst thousands of servers.

My main contribution was simulating thousands of users making requests to a hotel resrvation application and measuring its power consumption and latency (think: time it takes to receive a confirmation after clicking "book"). What I didn't know going into this project is that there are a lot of pitfalls to avoid if you want to make your results _reproducible_, meaning that anyone else can easily re-run your experiment and get the same results at any point in the future.

I believe the tips in this post are relevant not only to researchers, but anyone who is developing an application and wants to see how it will perform when thousands of users are using it. Being able to make claims like "my application takes under 5ms to load for 99% of users" of users requires convincing and repeatable results.

# How It All Started

![big if true: the one figure in our 6-page report that caught our professor's eye](the_root_of_evil.png)

The figure you're seeing above is what led me down a long rabbithole of trying (and failing) to achieve the same results again. Don't worry, all you need to understand from this figure is that blue line on the right consistently uses less power than orange line but somehow has very similar latency to orange line on the left, even under high load.

Admittedly, I didn't know enough about how servers consume power to flag this discovery as potentially interesting. But our Professor did, and they encouraged us to see if we could reproduce the results, because this result could be _very_ promising if true.

# Some Background

I did not know much about what goes into constructing datacenter before taking this course, but came out

https://github.com/kworathur/DeathStarBench/tree/6ecb09706140f8730b5385c08f1386c654c3c526/hotelReservation

In particular, I want to measure the p99 latency when the server is at the point of saturation, which you can imagine would become important if a bunch of people were searching for hotels at once.

## 1. Establish Baselines

Show docker vs. bare processes and justify why you opted for bare processes

Show docker latency vs bare process latency

```txt
Test Results @ http://10.10.3.2:5000
  Thread Stats   Avg      Stdev     99%   +/- Stdev
    Latency   124.86ms  146.21ms 580.09ms   83.60%
    Req/Sec    49.16     10.66    73.00     71.79%
  Latency Distribution (HdrHistogram - Recorded Latency)
 50.000%   78.97ms
 75.000%  211.71ms
 90.000%  328.19ms
 99.000%  580.09ms
 99.900%  775.17ms
 99.990%  844.80ms
 99.999%  844.80ms
100.000%  844.80ms
```

(maybe make this a bar chart)

These results give us a good "upper limit" on the latency figures we should get. Anything larger than these numbers, and we can be sure that something might be wrong with our experimental setup.

[TODO: add wrk2 output for bare processes]
(double check this figure)

## 2. Start out by Profiling a Single Request Path

This tip is a little more subtle, but I'll try my best to explain it here.

This one is more subtle, but many apps today rely on caching. Caching can improve request latency, and also may make workloads more CPU intensive, the more the cache gets populated.

## 3. Change One Variable at a Time; Document Configs

## 4. Version Control is Your Friend

While you're following these tips, it may become challenging to commit frequently.
If you take away one tip from this guide, it's to commit changes frequently. This is good software engineering practice, and is what helped me find out the root cause (see below)

## Conclusion

At the end of the day, the likely root cause is out-of-sync binaries used for testing. There was a commit that changed the search functionality to do a full scan of memcached rather than filter on in and out data. While seeming insignifcant, through a lot of trial and error I see that this change decreased power usage by 4W, which is supported by the fact that the CPU is doing more work.

# The Testbench

I ran all of my profiling experiments on cloudlab c220g1 machines, which have 2 Intel Xeon E5-2630 CPUs, @ 2.40 GHz each with eight cores. 32 threads can be executing simultaneously on this machine

# Establishing a baseline

First, we want to establish baseline latencies using docker. To do this, I cloned the [DeathStarBench project](https://github.com/kworathur/DeathStarBench/tree/master) from github and followed the setup instructions.

Let's see what happens if we hit the search service with a heavy load.

# Baby Steps

Any time you want to see how a system does under load, it is good to start small.

1. try issuing a very low number of requests to the service
2. try limiting the types of requests you send to a single request. I chose to target the hotels functionality specifically because it has a larger fan-out and touches the database and cache on almost every request.

While docker is a great tool for reproducing results, it adds overhead to the request latency due to its host networking that can make it difficult to push the server to its limits. Profiling an application that's been containerized also brings its own set of challenges.

The client is the bottleneck

```txt




```
