# platziverse-mqtt

## `agent/connected`

``` js
{
    agent: {
        uuid, // auto generated
        username, // define by config
        name, // define by config
        hostname, // get from OS
        pid // get from process
    }
}

```

## `agent/disconnected`

``` js
{
    agent: {
        uuid,
    }
}

```

## `agent/message`

``` js
{
    agent,
    metrics: [
        {
            type,
            value
        }
    ],
    timestamp // generated when message is created
}

```