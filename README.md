# InClauseGenerator

You Can make SQL's in clause from text witch written in  excel, text file,other plane text.

Paste text like this format

```
column name
value1
value2
value3
```

and Push 'generate' button,script make In clause like this

```
WHERE
column name IN
(
value1,
value2,
value3
)
```

note:you could choice char option to add single quote both end of the value

```
WHERE
column name IN
(
'value1',
'value2',
'value3'
)
```
