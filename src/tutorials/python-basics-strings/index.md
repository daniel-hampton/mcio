---
title: Python Basics - Strings
description: Learn how to manipulate text in Python. Use the power of words!
sidebar: auto
tags: ["python", "beginner", "jupyter-notebook", "video", "strings"]
published: "2020-03-16"
prev: "/tutorials/getting-started-with-python/"
image: "/python-basics-strings.jpg"
thumbnail: "/python-basics-strings-square.jpg"
meta:
  - property: "og:title"
    content: "Python Basics - Strings"
  - property: "og:description"
    content: "Learn how to manipulate text in Python. Use the power of words!"
  - property: "og:image"
    content: "https://moderncoder.io/python-basics-strings.jpg"
  - property: "og:url"
    content: "https://moderncoder.io/tutorials/python-basics-strings/"
  - property: "twitter:card"
    content: "summary_large_image"
  - property: "og:type"
    content: "website"
---

<ArticleTitle />
<TagLinks />

Harness the power of words in Python by manipulating text, also known as
`strings`. 

<!-- more -->
<YouTube videoUrl="https://youtu.be/Di9VKVGdz3w" />

## What Are Strings?
In programming, strings are essentially the text data your code uses. This
terminology differentiates it from the code itself or comments in your code,
which technically is all in a text document anyway.

In Python, you can write strings with either double quotes `" "` or single quotes
`' '`. Like other data, it can be stored in variables.


```python
x = "This is a string"
```


```python
y = 'This is also a valid string'
```

If you remember the `type()` function from before you can check the types of
these variables.


```python
type(x)
```




    str



`str` is what Python calls the string type.

You can convert numerical data such as integers and floats into strings by using
`str()`.


```python
x = 42
type(x)
```




    int




```python
x
```




    42




```python
x = str(42)
type(x)
```




    str




```python
x
```




    '42'



Notice the quotes around the number 42 in that last output. This is telling us
the value of `x` is now a string.

## Introducing the Print Function

Up to this point, we have been viewing the values of variables and output of our
code by typing either the variable or expression in a single line in the Jupyter
Notebook or ipython terminal. You wouldn't normally do this in programs you
write so let's introduce a way to directly tell Python to print some text. The
built-in `print()` function will do this for us.


```python
print("My custom string")
```

    My custom string



```python
print(x)
```

    42


`print(your_expression)` will print the string representation of the expression
to the terminal. Note that `x` is still a string. Since `print` always outputs a
string, `x` doesn't have the quotes around it like before.

Adding `print` statements to your code is useful if you want to see the values
of variables at different steps.


```python
def my_function():
    """Example function that doesn't return anything but prints to the terminal"""
    x = 42
    print(x)
    x = x *2
    print(x)
```


```python
my_function()
```

    42
    84


We see that by calling `my_function()` the print statement outputs the value of
`x` at the point in time print was called.

## Escape Characters
Since quotes (either single or double) are special characters used to declare
the start and end of a string in your code, you can't use them directly in your
strings without the use of a special **escape** character. The `\`.

For instance, this won't work:


```python
print("Everyone loves "air quotes"!")
```


      File "<ipython-input-13-a83c1453fe18>", line 1
        print("Everyone loves "air quotes"!")
                                 ^
    SyntaxError: invalid syntax



You need to escape the inside quotes you want to use in the value of your string.


```python
print("Everyone loves \"air quotes\"!")
```

If you declare the string with double quotes, you can use single quotes inside
without escaping, and vice versa.


```python
print("Everyone loves 'air quotes'!")
```

    Everyone loves 'air quotes'!


This means declaring strings with double quotes makes using apostrophes `'` a
little easier.


```python
print("I'm awesome 'cause reasons.")
```

    I'm awesome 'cause reasons.


If you use single quotes, you have to escape the apostrophes.


```python
print('I\'m awesome \'cause reasons.')
```

    I'm awesome 'cause reasons.


Another common use of the escape character is to create strings that have text
on multiple lines. `\n` is the newline character.


```python
print("This sentence is on the first line.\nThis sentence is on the second line.")
```

    This sentence is on the first line.
    This sentence is on the second line.


There are other times you may see characters escaped, but we'll discuss those as
we come across them.

### Triple Quote (Multi-line) Strings

You may recall in some of our functions we created a **docstring** using triple
quotes `""" """`. You can create strings with triple quotes in normal code. This
will automatically include the end of line characters.


```python
print("""First line.
Second line.
    Tabbed. Third line.""")
```

    First line.
    Second line.
        Tabbed. Third line.


## Manipulating Strings

There are a lot of operations we can perform on strings once we've declared
them. Let's go through a few examples.

Calculate how many characters are in a string (the length) by using the `len()`
function.


```python
my_string = "Hello and welcome to ModernCoder.io!"
print(len(my_string))
```

    36


You can add or **concatenate** two or more strings together by using the `+`
operator.


```python
new_string = my_string + " I hope you are enjoying learning to program."
print(new_string)
```

    Hello and welcome to ModernCoder.io! I hope you are enjoying learning to program.


You can duplicate a string multiple times by using the `*` operator.


```python
double_me = "Show me twice!"
print(double_me * 2)
```

    Show me twice!Show me twice!


You can break up a string into a **list** of strings using `.split()`. We will
talk about lists more in a future tutorial.


```python
# Separate the string at each empty space ' '.
print(my_string.split(' '))
```

    ['Hello', 'and', 'welcome', 'to', 'ModernCoder.io!']


You can change the case of a string by calling several methods on the string
object.


```python
# Convert all character to lowercase.
my_string.lower()
```




    'hello and welcome to moderncoder.io!'




```python
# Convert all character to uppercase.
my_string.upper()
```




    'HELLO AND WELCOME TO MODERNCODER.IO!'




```python
# Convert to title case.
my_string.title()
```




    'Hello And Welcome To Moderncoder.Io!'



### Get A String From The User

You can prompt the user to enter a string in the command line or notebook by
using the built-in `input()` function. It will store whatever the user types in
the variable you specify.


```python
users_name = input("Enter your name: ")
print(users_name)
```

    Enter your name: Daniel
    Daniel



```python
print(users_name)
```

    Daniel


The string you pass to `input()` is the message displayed to the user.

Sometimes getting input from a user means some unwanted spaces in your string.


```python
users_name = input("Enter your name: ")
users_name
```

    Enter your name:          Daniel      





    '         Daniel      '



You can remove the extra whitespace at the start and end of a string by using
the `.strip()` method.


```python
users_name = users_name.strip()
users_name
```




    'Daniel'



This is useful to fix odd inputs you might get from users or other sources of
data.

## String Formatting

You can **format** your string with the values of variables in your code. Write
a single string, and populate it with a user's name, phone number, age or email
for example. Let's look at two methods to do essentially the same thing. First
is the `.format()` method, and then a more recent approach called `f-strings`
available in Python version 3.6 and higher.

### Using .format()


```python
formatted_string = "Hello {}! welcome to your homepage.".format(users_name)
print(formatted_string)
```

    Hello Daniel! welcome to your homepage.


Here we declared a string with a placeholder using the curly brackets `{}`. The
value of the first argument to `.format()` is placed inside the placeholder when
the string is printed. You can have multiple placeholders and they will be
formatted in the order of the arguments.


```python
formatted_string = "{}, the year is {}, and you love {}.".format(users_name, 2020, "coffee")
print(formatted_string)
```

    Daniel, the year is 2020, and you love coffee.


If you want to use variables multiple times in a string, or with a different
order than the arguments passed to `.format()` you can specify numbers that
correspond to the arguments. Staring with 0. (Python is **zero-indexed**. We'll
talk about that more when we come to **lists**).


```python
formatted_string = "In the beginning there was {2}, {0}. Now, in the year {1}, there is still much {2}".format(users_name, 2020, "coffee")
print(formatted_string)
```

    In the beginning there was coffee, Daniel. Now, in the year 2020, there is still much coffee


You'll notice here we used them out of order, and we used `"coffee"` twice in
the string while only having to pass it as a single argument to `.format()`.

### Using f-strings

In Python 3.6 and newer versions, we can use an alternative approach to string
formatting called **f-strings**. You can enter variables and expressions
directly into the string's placeholders `{}` instead of passing them to
`.format()` at the end of the string. Simply put an `f` before the string when
you declare it.


```python
f_string = f"Hello {users_name}! welcome to your homepage."
print(f_string)
```

    Hello Daniel! welcome to your homepage.


You can put expressions inside the placeholders as well.


```python
f_string = f"The product of 3 and 5 is {3 * 5}."
print(f_string)
```

    The product of 3 and 5 is 15.


What happens if we end up with a **float** in our string?


```python
f_string = f"The answer to 10 divided by 3 is {10/3}."
print(f_string)
```

    The answer to 10 divided by 3 is 3.3333333333333335.


Yikes! That's a lot of decimal places. What if we only want to display the
number up to two decimal places? Luckily we can use **format specifications** to
gain more control over how the string is displayed.


```python
f_string = f"The answer to 10 divided by 3 is {10/3:.2f}."
print(f_string)
```

    The answer to 10 divided by 3 is 3.33.


We added this part `:.2f` to the end of our placeholder. This works for **both**
f-strings and the `.format()` method. The part after the `:` is the format
specification. Here we say we want a precision of two decimal places (`.2`) and
indicate it is a floating-point number. (`f`). There are a _lot_ more options to
format specifications which we will cover as the need arises. If you're curious
you can head on over to the
[official documentation](https://docs.python.org/3/library/string.html#format-specification-mini-language).

## Fun with Emoji 😎

Strings are sequences of characters. Since Python 3.0 these sequences are stored
as **unicode**. This was a pretty big advancement from 2.X.

>Q: What is Unicode?

> A: Unicode is the universal character encoding, maintained by the Unicode
> Consortium. This encoding standard provides the basis for processing, storage
> and interchange of text data in any language in all modern software and
> information technology protocols.

From the [FAQ](https://home.unicode.org/basic-info/faq/) we learn that the
Unicode standard is important in ensuring data can be more easily interchanged
between any language in modern software. This means you can write strings in
Python in the language of your choice!



```python
print("my favorite color is blue.")
print("我最喜欢的颜色是蓝色的")
print("הצבע האהוב עליי הוא כחול")

```

    my favorite color is blue.
    我最喜欢的颜色是蓝色的
    הצבע האהוב עליי הוא כחול


Here we see Chinese and Hebrew according to Google Translate.

This works well if you are working in a browser, such as Chrome or Firefox. You
may have issues with the characters being displayed correctly on the command
line, depending on which terminal you're using.

Perhaps the most fun and immediate use of Unicode though is the use of emoji.
Take a look at the
[Full Emoji List](http://unicode.org/emoji/charts/full-emoji-list.html) from
unicode.org. You can select, copy, then paste characters from the **Browser**
column into your code. This is because these are not images, but rather how the
browser renders Unicode characters. Go try it out!


```python
x = "💙🚀🌞😈🤯🤬 Having fun yet? 💙🚀🌞😈🤯🤬"
print(x * 2)
```

    💙🚀🌞😈🤯🤬 Having fun yet? 💙🚀🌞😈🤯🤬💙🚀🌞😈🤯🤬 Having fun yet? 💙🚀🌞😈🤯🤬


## Review

Let's review what we covered in this tutorial.

* Introduced a new data type called `str` in Python for strings.
* You can use either single or double quotes to declare strings.
* Introduced the `print` function to output strings to the terminal.
* How to escape characters such as apostrophes or newlines.
* How to manipulate strings using **concatenation**, duplication, and methods
  for changing case.
* Use the `input` function to get a string from the user and remove extra
  whitespace.
* Format strings with data from your code using either f-strings or the
  `.format` method.
* Introduced the format specification mini-language.
* Learned that strings are stored as Unicode in Python, allowing you to write
  multi-lingual code and expressive emoji. 💩 (Can you not see how this sentence
  is enhanced by the use of emoji?!)

## Follow me!
I sincerely hope you enjoyed and learned something from this article. For
questions, you can contact me on [Twitter](https://twitter.com/DanCanDoTV), for
errors or corrections in the article you can create an Issue on
[GitHub](https://github.com/dhampton084/mcio). Thanks for reading! 📖

If you want to know when the next tutorial and other content is released, you
can subscribe to the
[YouTube channel](https://www.youtube.com/channel/UCb8RK2cBQl9X-l3TEVuT2Gg) or
follow me on Twitter [@DanCanDoTV](https://twitter.com/DanCanDoTV).

