export class Silnia {
  public static Iteration(n: number): number {
    if (n <= 1) return 1;
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  public static Recursion(n: number): number {
    if (n <= 1) return 1;
    return this.Recursion(n - 1) * n;
  }
}
