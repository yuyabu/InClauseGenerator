[![Build Status](https://travis-ci.org/yuyabu/InClauseGenerator.svg?branch=master)](https://travis-ci.org/yuyabu/InClauseGenerator)

# InClauseGenerator

You Can make SQL's In Clause from text which written in  excel, text file, other plane text.

Paste text like this format

```
column name
value1
value2
value3
```

and push 'generate' button, script will make In Clause like this

```
 where column name in ( value1, value2, value3 ) 
```

note:you could choice char option to add single quote both end of the value

```
 where column name in ( 'value1', 'value2', 'value3' ) 
```
