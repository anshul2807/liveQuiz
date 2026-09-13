// 6 Hands-on C++ Coding Challenges (Units 1, 2, 3) - Blank Starter Codes for Students
// Reference solutions are strictly Admin-only and stored on backend.

export const CODING_CHALLENGES = [
  {
    "id": "challenge-1",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Student Gradebook & Method Overloading with Pass-by-Reference",
    "category": "OOP, Overloading & References",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Implement a Gradebook class that encapsulates student scores, provides overloaded methods for raw and weighted grades, and computes average and letter grade using pass-by-reference.",
    "learningObjectives": [
      "Encapsulate data members inside private access specifiers",
      "Implement function and method overloading for flexible parameter types",
      "Use pass-by-reference (double& avg, char& grade) to return multiple computed values without tuples",
      "Format output with fixed decimal precision using <iomanip>"
    ],
    "keyConcepts": [
      "Classes vs Structs: private by default in classes",
      "Method overloading requires different parameter signatures (types or arity)",
      "Pass-by-reference avoids copying large structures and allows direct in-place mutation of caller variables",
      "std::fixed and std::setprecision for decimal formatting"
    ],
    "commonPitfalls": [
      "Declaring methods with identical signatures differing only by return type is a compilation error in C++.",
      "Passing by value when the caller expects mutated values causes results to be lost upon function return."
    ],
    "inputFormat": "Sequence of raw and weighted scores to insert into Gradebook.",
    "outputFormat": "Detailed log of added scores, followed by total count, average score, and letter grade.",
    "constraints": "Raw score >= 0.0, weight >= 1.0; at least 1 score provided.",
    "starterCode": "#include <iostream>\n#include <vector>\n#include <iomanip>\n\nclass Gradebook {\nprivate:\n    std::vector<double> scores;\n\npublic:\n    // TODO: 1. Overload addScore for integer raw score\n    void addScore(int score) {\n        // Your code here\n    }\n\n    // TODO: 2. Overload addScore for weighted floating-point score (score * weight)\n    void addScore(double score, double weight) {\n        // Your code here\n    }\n\n    // TODO: 3. Compute stats via pass-by-reference\n    void computeStats(double& avgOut, char& gradeOut) const {\n        // Your code here\n    }\n\n    size_t getCount() const { return scores.size(); }\n};\n\nint main() {\n    Gradebook gb;\n    gb.addScore(85);\n    gb.addScore(92.5, 1.2);\n    gb.addScore(78);\n\n    double avg = 0.0;\n    char grade = ' ';\n    gb.computeStats(avg, grade);\n\n    std::cout << \"--- Gradebook Summary ---\\n\";\n    std::cout << \"Total Entries: \" << gb.getCount() << \"\\n\";\n    std::cout << \"Average Score: \" << std::fixed << std::setprecision(1) << avg << \"\\n\";\n    std::cout << \"Final Letter Grade: \" << grade << \"\\n\";\n    return 0;\n}",
    "testCases": [
      {
        "id": "tc-1-1",
        "name": "Evaluate Standard Gradebook",
        "description": "Tests integer raw score, weighted score, and reference stats calculation",
        "input": "85, 92.5 * 1.2, 78",
        "expectedOutput": "Added regular score: 85\nAdded weighted score: 92.5 (Weight: 1.2) -> 111.0\nAdded regular score: 78\n--- Gradebook Summary ---\nTotal Entries: 3\nAverage Score: 91.3\nFinal Letter Grade: A"
      }
    ],
    "isAdminProtected": true
  },
  {
    "id": "challenge-2",
    "unitId": "unit1",
    "unitTitle": "Unit I: Concepts and Basics of C++ Programming",
    "title": "Static Bank Account Tracker & Friend Function Reserve Auditor",
    "category": "Static Members & Friend Functions",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Manage bank accounts using static class variables to track global vault reserves, and implement an external friend function to audit private account balances without getters.",
    "learningObjectives": [
      "Declare and define static data members across instances",
      "Implement static member functions callable without an object instance",
      "Declare external functions as friend to grant controlled access to private members",
      "Distinguish between class-level state (static) and instance-level state"
    ],
    "keyConcepts": [
      "Static member variables must be explicitly defined in file scope outside the class",
      "Static member functions cannot access the non-static \"this\" pointer",
      "Friend functions are non-member functions granted access to private and protected fields"
    ],
    "commonPitfalls": [
      "Forgetting to initialize a static member outside the class body leads to unresolved external symbol linker errors.",
      "Attempting to access non-static members from inside a static member function without an explicit object instance."
    ],
    "inputFormat": "Account creations with IDs and initial deposits, followed by audit threshold.",
    "outputFormat": "Account registration logs, static totals, and friend audit pass/fail reports.",
    "constraints": "Deposit > 0.0; Account ID > 0.",
    "starterCode": "#include <iostream>\n#include <iomanip>\n\nclass BankAccount {\nprivate:\n    int accountId;\n    double balance;\n\n    // TODO: 1. Static members for bank-wide totals\n    static int totalAccounts;\n    static double totalVaultCash;\n\npublic:\n    BankAccount(int id, double initialDeposit) : accountId(id), balance(initialDeposit) {\n        // TODO: Update static counts and vault cash, then print creation message\n    }\n\n    // TODO: 2. Static member functions to report global vault cash and total accounts\n    static double getTotalVaultCash() {\n        // Your code here\n        return 0.0;\n    }\n\n    static int getTotalAccounts() {\n        // Your code here\n        return 0;\n    }\n\n    // TODO: 3. Declare friend auditor function\n    friend bool auditAccount(const BankAccount& acc, double minimumReserve);\n};\n\n// Define static variables in file scope\nint BankAccount::totalAccounts = 0;\ndouble BankAccount::totalVaultCash = 0.0;\n\n// TODO: 4. Implement friend function auditAccount (access private balance directly)\nbool auditAccount(const BankAccount& acc, double minimumReserve) {\n    // Your code here\n    return false;\n}\n\nint main() {\n    BankAccount a1(101, 5000.00);\n    BankAccount a2(102, 12000.00);\n\n    std::cout << \"Total Active Accounts: \" << BankAccount::getTotalAccounts()\n              << \" | Total Vault Reserves: $\" << std::fixed << std::setprecision(2) \n              << BankAccount::getTotalVaultCash() << \"\\n\";\n\n    auditAccount(a1, 6000.00);\n    auditAccount(a2, 6000.00);\n    return 0;\n}",
    "testCases": [
      {
        "id": "tc-2-1",
        "name": "Bank Accounts Vault & Audit Verification",
        "description": "Tests static global tracking and friend function auditing on accounts 101 and 102",
        "input": "Account 101 ($5000), Account 102 ($12000), Reserve threshold $6000",
        "expectedOutput": "[Account Created] ID: 101, Initial Deposit: $5000.00\n[Account Created] ID: 102, Initial Deposit: $12000.00\nTotal Active Accounts: 2 | Total Vault Reserves: $17000.00\n[Audit] Account 101 ($5000.00) vs Minimum ($6000.00) -> FAILED\n[Audit] Account 102 ($12000.00) vs Minimum ($6000.00) -> PASSED"
      }
    ],
    "isAdminProtected": true
  },
  {
    "id": "challenge-3",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, References, Arrays and String Concepts",
    "title": "Two-Pointer Dynamic Array Filter & In-Place String Reversal",
    "category": "Pointer Arithmetic & Memory Management",
    "difficulty": "easy",
    "estimatedTime": "20 mins",
    "summary": "Manipulate memory using raw pointers: perform an in-place string reversal using two-pointer swapping and filter a dynamic integer array using pointer arithmetic.",
    "learningObjectives": [
      "Implement the two-pointer technique using raw char* pointers",
      "Traverse contiguous memory buffers using pointer arithmetic: *(ptr + i)",
      "Dynamically allocate an array with new int[size] and release with delete[]",
      "Prevent memory leaks by guaranteeing proper deallocation"
    ],
    "keyConcepts": [
      "A pointer stores the memory address of an object",
      "Pointer increment (ptr++) advances the address by sizeof(Type) bytes",
      "Using delete instead of delete[] on an array produces undefined behavior"
    ],
    "commonPitfalls": [
      "Dangling pointers: using a pointer after its memory has been deallocated with delete[].",
      "Off-by-one errors when advancing pointer bounds leading to out-of-bounds memory access."
    ],
    "inputFormat": "C-string to reverse, followed by an integer list for dynamic filtering.",
    "outputFormat": "Original string, reversed string, dynamic array list, filtered items > 30, and deallocation confirmation.",
    "constraints": "String length < 100 characters; non-empty dynamic array.",
    "sampleInput": "String: \"DataStructures\", Array: [12, 45, 8, 91, 24, 63]",
    "sampleOutput": "Original String: \"DataStructures\"\nReversed String: \"serutcurtSataD\"\nDynamic Array Elements: 12 45 8 91 24 63\nFiltered Elements (> 30): 45 91 63\nDynamic memory successfully deallocated.",
    "starterCode": "#include <iostream>\n#include <cstring>\n\n// TODO: 1. In-place string reversal using raw pointers (two-pointer approach)\nvoid reverseStringInPlace(char* str) {\n    // Your code here\n}\n\n// TODO: 2. Filter dynamic array using pointer arithmetic\nvoid filterArray(const int* arr, int size, int threshold) {\n    // Your code here\n}\n\nint main() {\n    char text[] = \"DataStructures\";\n    std::cout << \"Original String: \\\"\" << text << \"\\\"\\n\";\n    reverseStringInPlace(text);\n    std::cout << \"Reversed String: \\\"\" << text << \"\\\"\\n\";\n\n    // Dynamic memory allocation\n    int size = 6;\n    int* dynArr = new int[size]{12, 45, 8, 91, 24, 63};\n\n    std::cout << \"Dynamic Array Elements: \";\n    for (int i = 0; i < size; ++i) {\n        std::cout << *(dynArr + i) << (i + 1 < size ? \" \" : \"\");\n    }\n    std::cout << \"\\n\";\n\n    filterArray(dynArr, size, 30);\n\n    // Proper array deallocation\n    delete[] dynArr;\n    dynArr = nullptr;\n    std::cout << \"Dynamic memory successfully deallocated.\\n\";\n\n    return 0;\n}",
    "testCases": [
      {
        "id": "tc-3-1",
        "name": "String In-Place Reverse & Pointer Filter",
        "description": "Tests two-pointer string reversal and pointer arithmetic dynamic filtering",
        "input": "String: \"DataStructures\", Array: [12, 45, 8, 91, 24, 63]",
        "expectedOutput": "Original String: \"DataStructures\"\nReversed String: \"serutcurtSataD\"\nDynamic Array Elements: 12 45 8 91 24 63\nFiltered Elements (> 30): 45 91 63\nDynamic memory successfully deallocated."
      }
    ],
    "isAdminProtected": true
  },
  {
    "id": "challenge-4",
    "unitId": "unit2",
    "unitTitle": "Unit II: Pointers, References, Arrays and String Concepts",
    "title": "2D Dynamic Matrix with Pointers to Pointers & Method Chaining via \"this\"",
    "category": "Pointer to Pointer & this Pointer",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Build a dynamic 2D Matrix class utilizing pointer to pointer (int**), supporting fluent method chaining returning *this, matrix transposition, and safe two-dimensional deallocation.",
    "learningObjectives": [
      "Allocate multidimensional dynamic arrays using pointer-to-pointer (int**)",
      "Use the \"this\" pointer for method chaining (e.g. m.set(0,0,1).set(0,1,2))",
      "Compute matrix transposition using pointer manipulation",
      "Correctly free 2D memory by deallocating individual row buffers before the spine pointer"
    ],
    "keyConcepts": [
      "int** stores an array of pointers, each pointing to an array of integers",
      "Returning *this by reference allows chained method calls",
      "Failure to free each row before deleting the top-level pointer results in persistent memory leaks"
    ],
    "commonPitfalls": [
      "Deleting only the outer pointer (delete[] grid) leaves all allocated rows orphaned in heap memory.",
      "Accessing grid[r][c] with inverted indices triggering memory out-of-bounds violations."
    ],
    "inputFormat": "A 2x3 matrix [[1,2,3],[4,5,6]] to initialize, print, transpose, and clean up.",
    "outputFormat": "Original 2x3 matrix, transposed 3x2 matrix, and deallocation confirmation message.",
    "constraints": "Rows, Cols >= 1 and <= 20.",
    "starterCode": "#include <iostream>\n\nclass Matrix2D {\nprivate:\n    int rows;\n    int cols;\n    int** data; // Pointer to pointer for 2D memory\n\npublic:\n    Matrix2D(int r, int c) : rows(r), cols(c) {\n        // Allocate array of row pointers\n        data = new int*[rows];\n        for (int i = 0; i < rows; ++i) {\n            data[i] = new int[cols]{0};\n        }\n    }\n\n    ~Matrix2D() {\n        // TODO: Properly deallocate 2D memory (free each row then delete[] data)\n    }\n\n    // TODO: Method chaining using \"this\" pointer\n    Matrix2D& set(int r, int c, int val) {\n        // Your code here\n        return *this;\n    }\n\n    int get(int r, int c) const {\n        return data[r][c];\n    }\n\n    int getRows() const { return rows; }\n    int getCols() const { return cols; }\n\n    void print() const {\n        for (int i = 0; i < rows; ++i) {\n            for (int j = 0; j < cols; ++j) {\n                std::cout << data[i][j] << (j + 1 < cols ? \" \" : \"\");\n            }\n            std::cout << \"\\n\";\n        }\n    }\n\n    // TODO: Transpose matrix and return new Matrix2D instance\n    Matrix2D transpose() const {\n        Matrix2D transposed(cols, rows);\n        // Your code here\n        return transposed;\n    }\n};\n\nint main() {\n    Matrix2D m(2, 3);\n    // Method chaining demonstration\n    m.set(0, 0, 1).set(0, 1, 2).set(0, 2, 3)\n     .set(1, 0, 4).set(1, 1, 5).set(1, 2, 6);\n\n    std::cout << \"Original Matrix (2x3):\\n\";\n    m.print();\n\n    Matrix2D t = m.transpose();\n    std::cout << \"Transposed Matrix (3x2):\\n\";\n    t.print();\n\n    std::cout << \"Deallocated 2D pointer-to-pointer matrix memory.\\n\";\n    return 0;\n}",
    "testCases": [
      {
        "id": "tc-4-1",
        "name": "2x3 Matrix Transposition & Chaining",
        "description": "Verifies method chaining with this pointer, 2D dynamic memory, and matrix transpose",
        "input": "Matrix dimensions 2x3, values [[1,2,3],[4,5,6]]",
        "expectedOutput": "Original Matrix (2x3):\n1 2 3\n4 5 6\nTransposed Matrix (3x2):\n1 4\n2 5\n3 6\nDeallocated 2D pointer-to-pointer matrix memory."
      }
    ],
    "isAdminProtected": true
  },
  {
    "id": "challenge-5",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "Binary Record Store with In-Place Random-Access Seekg/Seekp Updating",
    "category": "Binary I/O & Random Access",
    "difficulty": "medium",
    "estimatedTime": "30 mins",
    "summary": "Implement in-place modification of binary employee records using fstream bidirectional mode, deterministic offset calculation, seekg, seekp, and reinterpret_cast.",
    "learningObjectives": [
      "Master std::fstream open mode: ios::in | ios::out | ios::binary",
      "Calculate deterministic byte offsets: position = recordIndex * sizeof(StructType)",
      "Reposition Get pointer (seekg) for reading and Put pointer (seekp) for rewriting",
      "Safely cast between struct pointers and raw char* buffers using reinterpret_cast",
      "Flush modified stream buffers to persistent disk using flush()"
    ],
    "keyConcepts": [
      "Fixed-size struct records enable random access seeking without scanning whole files",
      "Two file pointers: Get pointer (g) and Put pointer (p)",
      "Why seekp is required before rewrite: reading moves the Get pointer, so Put pointer must be repositioned",
      "ios::trunc must be avoided when opening for in-place modifications"
    ],
    "commonPitfalls": [
      "Forgetting to reposition seekp back to the record before calling write(), which corrupts the subsequent record.",
      "Opening with ios::trunc erases all preexisting data upon opening."
    ],
    "inputFormat": "Initial employee records, followed by target recordIndex and newSalary update instructions.",
    "outputFormat": "Pre-update log with old salary, updated record confirmation, and the complete formatted database dump.",
    "constraints": "Employee name is fixed char[32]; salaries are positive floating-point values.",
    "sampleInput": "Modify Record #1 to $110000.00",
    "sampleOutput": "Updating Record #1 (Sherlock Holmes) old salary: 95000.00\nID: 101 | Name: Dr. John Watson | Salary: $75000.00\nID: 102 | Name: Sherlock Holmes | Salary: $110000.00\nID: 103 | Name: Mycroft Holmes | Salary: $120000.00",
    "starterCode": "#include <iostream>\n#include <fstream>\n#include <cstring>\n#include <iomanip>\n#include <vector>\n\nstruct Employee {\n    int id;\n    char name[32];\n    double salary;\n};\n\nvoid createEmployeeDatabase(const std::string& filename, const std::vector<Employee>& staff) {\n    std::ofstream out(filename, std::ios::out | std::ios::binary | std::ios::trunc);\n    if (!out) return;\n    for (const auto& emp : staff) {\n        out.write(reinterpret_cast<const char*>(&emp), sizeof(Employee));\n    }\n    out.close();\n}\n\n// TODO: Implement in-place record modification using seekg, seekp and reinterpret_cast\nbool modifyEmployeeSalary(const std::string& filename, int recordIndex, double newSalary) {\n    // Your code here\n    return false;\n}\n\nvoid displayAllEmployees(const std::string& filename) {\n    std::ifstream in(filename, std::ios::in | std::ios::binary);\n    if (!in) return;\n    Employee emp;\n    while (in.read(reinterpret_cast<char*>(&emp), sizeof(Employee))) {\n        std::cout << \"ID: \" << emp.id << \" | Name: \" << emp.name \n                  << \" | Salary: $\" << std::fixed << std::setprecision(2) << emp.salary << \"\\n\";\n    }\n    in.close();\n}\n\nint main() {\n    std::string dbFile = \"employees_db.dat\";\n    std::vector<Employee> initialStaff = {\n        {101, \"Dr. John Watson\", 75000.0},\n        {102, \"Sherlock Holmes\", 95000.0},\n        {103, \"Mycroft Holmes\", 120000.0}\n    };\n\n    createEmployeeDatabase(dbFile, initialStaff);\n    modifyEmployeeSalary(dbFile, 1, 110000.0);\n    displayAllEmployees(dbFile);\n    return 0;\n}",
    "testCases": [
      {
        "id": "tc-5-1",
        "name": "Modify Sherlock Salary in Binary Database",
        "description": "Update employee record index 1 to 110000.00 and dump table",
        "input": "Record index: 1, New Salary: 110000.00",
        "expectedOutput": "Updating Record #1 (Sherlock Holmes) old salary: 95000.00\nID: 101 | Name: Dr. John Watson | Salary: $75000.00\nID: 102 | Name: Sherlock Holmes | Salary: $110000.00\nID: 103 | Name: Mycroft Holmes | Salary: $120000.00"
      }
    ],
    "isAdminProtected": true
  },
  {
    "id": "challenge-6",
    "unitId": "unit3",
    "unitTitle": "Unit III: File Operations, Constructors, and Destructors in C++",
    "title": "Exception-Safe RAII BufferManager with Deep Copy Semantics & Initializer Lists",
    "category": "Constructors, Initializer Lists & RAII",
    "difficulty": "hard",
    "estimatedTime": "35 mins",
    "summary": "Implement a comprehensive resource-managing class using mandatory Member Initializer Lists for const and reference members, a deep-copy constructor to prevent double-free crashes, and LIFO destruction.",
    "learningObjectives": [
      "Enforce mandatory Member Initializer Lists for const members and references (Type&)",
      "Construct objects with default argument parameterized constructors",
      "Implement deep copy constructors: allocate independent dynamic memory for copy instances",
      "Prevent double-free runtime crashes caused by shallow copies",
      "Demonstrate Stack LIFO (reverse construction) order of destructor execution"
    ],
    "keyConcepts": [
      "const and reference members MUST be initialized in the initializer list prior to the constructor body",
      "Initialization order is strictly dictated by declaration order in the class definition",
      "Default shallow copy does a bitwise copy of char* data, causing two objects to delete the same heap memory",
      "Destructors take no parameters, return no values, and execute automatically upon leaving lexical scope"
    ],
    "commonPitfalls": [
      "Attempting to assign const or reference members inside the constructor body causes compilation errors.",
      "Shallow copying classes that own heap pointers produces catastrophic double-free crashes."
    ],
    "inputFormat": "Initialization of BufferManager stack instances, copying via copy constructor, and exiting lexical scope.",
    "outputFormat": "Traced logs of Constructor allocation, Deep Copy allocation, state printing, and reverse-order Destructor deallocations.",
    "constraints": "Capacity >= 16; buffer text must be properly null-terminated.",
    "sampleInput": "Create bm1(default), bm2(custom 256), copy bm3 = bm2",
    "sampleOutput": "[Constructor] Allocated buffer of capacity 128\nRef Value: 42 | Content: default\n[Constructor] Allocated buffer of capacity 256\nRef Value: 42 | Content: Custom Initialization Text\n[Copy Constructor] Deep copy performed for buffer capacity 256\nRef Value: 42 | Content: Custom Initialization Text\n[Destructor] Deallocated memory buffer of capacity 256\n[Destructor] Deallocated memory buffer of capacity 256\n[Destructor] Deallocated memory buffer of capacity 128",
    "starterCode": "#include <iostream>\n#include <cstring>\n\nclass BufferManager {\nprivate:\n    const size_t capacity; // MUST use initializer list\n    int& externalRef;      // Reference member: MUST use initializer list\n    char* data;            // Dynamically allocated buffer\n\npublic:\n    // TODO: 1. Parameterized Constructor with Default Argument and Initializer List\n    BufferManager(int& ref, size_t cap = 128, const char* initialText = \"default\")\n        // TODO: Bind capacity, externalRef in initializer list, allocate data\n    {\n        // Your code here\n    }\n\n    // TODO: 2. Deep Copy Constructor\n    BufferManager(const BufferManager& other)\n        // TODO: Bind capacity, externalRef, and allocate independent memory\n    {\n        // Your code here\n    }\n\n    // TODO: 3. Destructor\n    ~BufferManager() {\n        // Your code here\n    }\n\n    void printState() const {\n        if (data) {\n            std::cout << \"Ref Value: \" << externalRef << \" | Content: \" << data << \"\\n\";\n        }\n    }\n};\n\nint main() {\n    int tracker = 42;\n    {\n        BufferManager bm1(tracker);\n        bm1.printState();\n\n        BufferManager bm2(tracker, 256, \"Custom Initialization Text\");\n        bm2.printState();\n\n        BufferManager bm3 = bm2;\n        bm3.printState();\n    } // Stack unwinding triggers destructors in reverse order: bm3, then bm2, then bm1\n\n    return 0;\n}",
    "testCases": [
      {
        "id": "tc-6-1",
        "name": "Verify BufferManager Lifecycle",
        "description": "Tests default constructor, explicit parameterized constructor, deep copy, and LIFO destruction sequence",
        "input": "Run BufferManager test suite with tracker = 42",
        "expectedOutput": "[Constructor] Allocated buffer of capacity 128\nRef Value: 42 | Content: default\n[Constructor] Allocated buffer of capacity 256\nRef Value: 42 | Content: Custom Initialization Text\n[Copy Constructor] Deep copy performed for buffer capacity 256\nRef Value: 42 | Content: Custom Initialization Text\n[Destructor] Deallocated memory buffer of capacity 256\n[Destructor] Deallocated memory buffer of capacity 256\n[Destructor] Deallocated memory buffer of capacity 128"
      }
    ],
    "isAdminProtected": true
  }
];
