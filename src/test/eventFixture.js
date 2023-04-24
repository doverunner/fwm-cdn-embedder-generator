exports.wmt = (fileName='seg-14.m4s', prefixFolder='wm-contents') => {
    return {
        'Records': [
            {'cf':
                    {'request':
                            {
                                'uri': `/wmt:eyJraWQiOiJRTVRHX2F3bXRfa2lkXzlhYjFmNWFiIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJ3bWlkaXZiNjQiOiI4WXd4SnhJQ0Z3NHh1ZVdDVklFODVnPT0iLCJ3bWlkY3RiNjQiOiJCSkN5RHhNendwREhocmhrV3BpZmRVdHVaUE84RzNiSlBDOWFrRmhpeEJFOG0vRjdiMlNnWkkwZWNKb1l2WWlyYTE3OHltMmswYzR3cjI5QWYvUVpFNysvakZWc3krRGxDUkdwOVRKdE9uWT0iLCJ3bWlkaXZsZW4iOjE2LCJ3bWlkcGlkIjoiUU1UR19hd210X3BpZF8xNWZhMGQxYyIsIndtaWRhbGciOiJhZXMtMjU2LWNiYyIsImlzcyI6InBhbGx5Y29uLmNvbSIsIndtaWRwYWxnIjoic2hhMjU2Iiwid21pZGl2aGV4IjoiZjE4YzMxMjcxMjAyMTcwZTMxYjllNTgyNTQ4MTNjZTYiLCJpYXQiOjE2NzU3NjEwODEsIndtdmVyIjoxfQ.DKH-ege6PvP7JZpcPPAhZuTtCpi7C6bW4dQ93XHYFsfNWOa0JoRahdgtKK5S7yBO6CbK1IGtqttaREbKnm4nTtUaTjr7NPwfT8xbRYgBLb2bHnFZlS5H9gP7N9wXu6mZf3nLkiQSLLnnhwew45coi1INECGAKZz4fmAQGJdBUBThEip3_YeNHj5BMNEDbyQnCp8Mg8oOD_cVP71Mbfc7AgGPZrl6ayackQLgchC78qUsyRS9EgCavP3hJurglwsPhwTZQtoKMEQHjnvIt7otx2kg2m8d6tczZSsLtYnL44rM5hRNkwCPcnVxN_CSWPTQvzngT2zcXLHPz-MljiD9Ew/${prefixFolder}/test/test-cid/dash/video/avc1/1/${fileName}`
                            }
                    }
            }
        ]
    }
}

exports.aes = (fileName='seg-14.m4s', prefixFolder='wm-contents') => {
    return {
        'Records': [
            {'cf':
                    {'request':
                            {
                                'uri': `/${prefixFolder}/kuGIBLxrkxop7vss_sAqfRdpBFhFPY3cq-CGCBEWJGsIFgKeOEhKO-7wmg2wwkFM_7dH5Rg9gvgeKUbWcev4zAyx8mX7qy0w4NfBBZZg6qk=/test/test-cid/dash/video/avc1/1/${fileName}`
                            }
                    }
            }
        ]
    }
}

exports.aesIncludeHls = (fileName='seg-14.m4s', prefixFolder='wm-contents') => {
    return {
        'Records': [
            {'cf':
                    {'request':
                            {
                                'uri': `/${prefixFolder}/kuGIBLxrkxop7vss_sAqfRdpBFhFPY3cq-CGCBEWJGtc9bTtyu43GDeFd30LJrsrCFA2y1uy5A1efjndDBwRcJ-biQWuzAYZPOBtUVGyaXQOjzZRQBnX9k16BVjjwCnkeqvm-a0UA5yy1TQaardpAg==/test/test-cid/dash/video/avc1/1/${fileName}`
                            }
                    }
            }
        ]
    }
}

exports.aesHls = (fileName='segment-14.m4s', prefixFolder='wm-contents') => {
    return {
        'Records': [
            {'cf':
                    {'request':
                            {
                                'uri': `/${prefixFolder}/kuGIBLxrkxop7vss_sAqfRdpBFhFPY3cq-CGCBEWJGsIFgKeOEhKO-7wmg2wwkFM_7dH5Rg9gvgeKUbWcev4zAyx8mX7qy0w4NfBBZZg6qk=/test/test-cid/hls/video/avc1/1/${fileName}`
                            }
                    }
            }
        ]
    }
}

exports.aesIncludeDash = (fileName='segment-14.ts', prefixFolder='wm-contents') => {
    return {
        'Records': [
            {'cf':
                    {'request':
                            {
                                'uri': `/${prefixFolder}/kuGIBLxrkxop7vss_sAqfRdpBFhFPY3cq-CGCBEWJGtc9bTtyu43GDeFd30LJrsrCFA2y1uy5A1efjndDBwRcJ-biQWuzAYZPOBtUVGyaXQOjzZRQBnX9k16BVjjwCnkeqvm-a0UA5yy1TQaardpAg==/test/test-cid/hls/video/avc1/1/${fileName}`
                            }
                    }
            }
        ]
    }
}
