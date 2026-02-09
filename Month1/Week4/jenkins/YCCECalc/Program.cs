namespace YCCeCalc;

public class MyMaths
{
    public int add2nos(int a, int b)
    {
        if (a > 0 && b > 0)
        {
            return a + b;
        }
        else
        {
            return 0;
        }
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        MyMaths obj = new MyMaths();
        int result = obj.add2nos(5, 3);

        Console.WriteLine("Sum = " + result);
    }
}
