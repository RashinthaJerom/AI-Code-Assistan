# Code Examples for Testing

This file contains ready-to-use code examples for testing the AI Code Assistant. Simply copy and paste each example into the code editor!

---

## JavaScript Examples

### Example 1: Array Sum with Bug 🐛

**Language**: JavaScript  
**Found**: Off-by-one error  
**Difficulty**: Easy

```javascript
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Expected: 15, Got: NaN
```

**What the AI finds:**
- Loop goes beyond array bounds
- `arr[arr.length]` is undefined
- Fixes to `i < arr.length`
- Optimizes with `.reduce()`

---

### Example 2: String Concatenation Type Error 🐛

**Language**: JavaScript  
**Found**: Type error  
**Difficulty**: Easy

```javascript
function greetUser(name, age) {
  console.log("Hello " + name + ", you are " + age + " years old.");
}

greetUser("Alice", 25);

// Later in code with wrong parameter
greetUser("Bob", "not a number");
```

**What the AI finds:**
- Type inconsistency
- Better approach using template literals
- Optional parameter validation

---

### Example 3: Async Code Issue 🐛

**Language**: JavaScript  
**Found**: Async/await error  
**Difficulty**: Medium

```javascript
async function fetchData(url) {
  const response = fetch(url);
  return response.json();
}

async function main() {
  const data = fetchData("https://api.example.com/data");
  console.log(data); // Promise, not data!
}

main();
```

**What the AI finds:**
- Missing `await` keyword
- Should be `const response = await fetch(...)`
- Proper error handling suggestion

---

### Example 4: Recursive Function Issue 🐛

**Language**: JavaScript  
**Found**: Logic error  
**Difficulty**: Hard

```javascript
function factorial(n) {
  if (n < 1) return 0;  // Wrong base case
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Should be 120
```

**What the AI finds:**
- Base case should be `n === 0 || n === 1 return 1`
- Current code causes infinite recursion
- Suggests iterative alternative

---

## Python Examples

### Example 5: Indentation & Syntax Error 🐛

**Language**: Python  
**Found**: Syntax error  
**Difficulty**: Easy

```python
def calculate_average(numbers):
    total = 0
    for num in numbers
        total += num
    average = total / len(numbers)
return average

result = calculate_average([10, 20, 30])
```

**What the AI finds:**
- Missing colon after `for` statement
- Indentation error in `return`
- Provides corrected version

---

### Example 6: Type Mixing 🐛

**Language**: Python  
**Found**: Type error  
**Difficulty**: Easy

```python
def greet(name, age):
    message = "Hello " + name + ", age " + age
    return message

greet("Alice", 25)  # Error: can't concat str and int
```

**What the AI finds:**
- Type error mixing string and integer
- Suggests f-strings or format()
- Better Python style

---

### Example 7: Index Error 🐛

**Language**: Python  
**Found**: Range error  
**Difficulty**: Medium

```python
def find_max(numbers):
    max_val = numbers[0]
    for i in range(len(numbers) + 1):  # Off by one!
        if numbers[i] > max_val:
            max_val = numbers[i]
    return max_val

print(find_max([3, 7, 2, 9, 1]))
```

**What the AI finds:**
- IndexError: list index out of range
- Fix: `range(len(numbers))`
- Suggest built-in `max()`

---

### Example 8: Variable Scope Issue 🐛

**Language**: Python  
**Found**: Logic error  
**Difficulty**: Medium

```python
counter = 0

def increment():
    counter = counter + 1  # Error with local variable
    return counter

print(increment())  # UnboundLocalError
```

**What the AI finds:**
- Variable scope issue
- Need `global counter` or class/parameter approach
- Suggests better patterns

---

## Java Examples

### Example 9: Null Pointer Exception 🐛

**Language**: Java  
**Found**: Null reference  
**Difficulty**: Medium

```java
public class Calculator {
    private String[] numbers;
    
    public int sum() {
        int total = 0;
        for (String num : numbers) {  // NullPointerException!
            total += Integer.parseInt(num);
        }
        return total;
    }
}
```

**What the AI finds:**
- `numbers` array not initialized
- Need constructor or initialization
- Null-checking best practices

---

### Example 10: Off-by-One Error 🐛

**Language**: Java  
**Found**: Array bounds error  
**Difficulty**: Easy

```java
public class ArrayUtils {
    public static int findMax(int[] arr) {
        int max = arr[0];
        for (int i = 0; i <= arr.length; i++) {  // Wrong!
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return max;
    }
}
```

**What the AI finds:**
- ArrayIndexOutOfBoundsException
- Use `i < arr.length`
- Stream API alternative

---

## PHP Examples

### Example 11: SQL Injection 🐛

**Language**: PHP  
**Found**: Security vulnerability  
**Difficulty**: Hard

```php
<?php
$userId = $_GET['id'];
$query = "SELECT * FROM users WHERE id = " . $userId;
$result = mysqli_query($connection, $query);
?>
```

**What the AI finds:**
- SQL injection vulnerability
- Use prepared statements
- Sanitize user input

---

### Example 12: Variable Not Defined 🐛

**Language**: PHP  
**Found**: Undefined variable  
**Difficulty**: Easy

```php
<?php
function process_user($data) {
    echo $user_name;  // Not defined!
    process($user_data);  // Typo: $user_data not $data
}
?>
```

**What the AI finds:**
- Variables used before definition
- Typo in variable name
- Better error handling

---

## SQL Examples

### Example 13: Incorrect JOIN 🐛

**Language**: SQL  
**Found**: Logic error  
**Difficulty**: Medium

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.amount > 1000
ORDER BY users.name;
```

**What works**: This is actually correct!

**Better alternative**: AI suggests:
- Adding index hints
- Using EXPLAIN
- Performance optimization
- Adding LIMIT clause

---

### Example 14: N+1 Query Problem 🐛

**Language**: SQL  
**Found**: Performance issue  
**Difficulty**: Hard

```sql
-- Bad: executed separately for each user
SELECT * FROM users;
-- Then for each user:
SELECT * FROM orders WHERE user_id = ?;
```

**What the AI finds:**
- Performance anti-pattern
- Use JOIN instead
- Consider stored procedures

---

## C++ Examples

### Example 15: Memory Leak 🐛

**Language**: C++  
**Found**: Memory management  
**Difficulty**: Hard

```cpp
#include <iostream>
using namespace std;

int main() {
    int* ptr = new int(42);
    cout << *ptr << endl;
    // Memory not deleted!
    return 0;
}
```

**What the AI finds:**
- Memory leak (no delete)
- Should use smart pointers
- Best practices for C++

---

## Ruby Examples

### Example 16: String vs Symbol 🐛

**Language**: Ruby  
**Found**: Type confusion  
**Difficulty**: Medium

```ruby
def greet(name)
  "Hello #{name}"
end

hash = {}
hash["user_name"] = "Alice"
greet(hash[:user_name])  # Returns nil!
```

**What the AI finds:**
- String key vs symbol key mismatch
- Consistent use of symbols or strings
- Ruby best practices

---

## HTML/CSS Examples

### Example 17: Invalid HTML 🐛

**Language**: HTML  
**Found**: Validation error  
**Difficulty**: Easy

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</titl>  <!-- Typo -->
</head>
<body>
    <div>
        <p>Hello World
    </div> <!-- p not closed -->
</body>
</html>
```

**What the AI finds:**
- Closing tag typo
- Unclosed `<p>` tag
- Proper nesting structure

---

## Complex Real-World Examples

### Example 18: E-Commerce Cart Bug 🐛

**Language**: JavaScript  
**Found**: State management issue  
**Difficulty**: Hard

```javascript
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    getTotal() {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price * item.quantity;
        });
        return total;
    }
    
    removeItem(index) {
        this.items.splice(index, 1);  // Works but...
    }
}

// Bug: user might remove item while iterating
```

**What the AI finds:**
- Logic issues with concurrent modification
- Better patterns for removal
- State management suggestions

---

## Testing Strategy

### Test Flow:
1. **Copy each example** from above
2. **Paste into code editor**
3. **Select the language**
4. **Choose analysis options**:
   - Basic: Find Errors + Fix Code
   - Advanced: All options
5. **Click Analyze**
6. **Review results**

### Expected Results:
Each example should:
- ✅ Find the described error
- ✅ Suggest a fix
- ✅ Explain the issue
- ✅ Optionally optimize

---

## Difficulty Levels

| Level | Characteristics | Examples |
|-------|-----------------|----------|
| Easy | Simple syntax/type errors | 1, 2, 5, 6, 10, 17 |
| Medium | Logic & scope issues | 7, 8, 9, 12, 14, 16 |
| Hard | Performance & design patterns | 4, 11, 13, 15, 18 |

---

## Tips for Testing

### For Each Example:
1. **Keep API key ready** - You'll need it
2. **Test one at a time** - Clear between tests
3. **Note response time** - Varies by complexity
4. **Check all sections** - Errors, fixes, explanations
5. **Try different options** - Find Errors vs Optimize vs Explain

### Recommended Test Order:
1. Start with Easy examples (1, 5)
2. Move to Medium (7, 8)
3. Try Complex (18)
4. Enable all options on one
5. Test different languages

---

## Create Your Own Tests

You can also test with:
- Your own buggy code
- Code from Stack Overflow questions
- Legacy code you want to optimize
- New languages you want to learn
- Performance-critical code

---

## Common Patterns the AI Finds

✅ Recognizes:
- Off-by-one errors
- Null/undefined references  
- Type mismatches
- Syntax errors
- Logic errors
- Performance issues
- Security vulnerabilities
- Best practice violations

---

**Happy Testing! 🚀**

Try an example now - pick one, copy the code, and hit "Analyze"!
