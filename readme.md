# Uptime CLI

Uptime CLI lets you monitor websites and track uptime/downtime through the command line.  It uses the [uptimerobot.com](https://uptimerobot.com) API to fetch data. Uptimerobot's free option allows you to monitor up to 50 websites free.

![Uptime CLI](https://i.imgur.com/EUjtIhN.png)

## Features

### General
1. Command Line Interface
1. Track Websites Uptime/Downtime

### Monitor Data Table
1. ID
1. Name
1. URL
1. Status
1. Type
1. Interval
1. Uptime %
1. Date Created

## Installation Instructions


1. Git Clone the repo

    ```
    git clone https://github.com/christ0ph3r/uptime-cli/
    ```

1. Enter the repository and copy the config file

    ```
    cd uptime-cli && cp config-sample.json config.json
    ```

1. Install NPM packages

    ```
    npm install
    ```

1. Edit config.json and put your [uptime robot api key](https://uptimerobot.com)

    ```json
    {
      "key": "xxxxxxx-xxxxxxxxxxxxxxxxxxxxxxxx"
    }
    ```

1. Run

      ```
      npm start
      ```

## Want to support my work? Donations accepted


| Coin     | Address                                    |
| -------- |:------------------------------------------:|
| Bitcoin  | 1LFTccjYHbiVekdm8XYC1ucNqdGsAC3frc         |
| Ethereum | 0x071Fe2Bb50430A3f6af398A410a78B67e1A783AE |
| Litecoin | Lh9eV96yhTyrkv2VkWG7RZvas9TzFuYZbR         |

