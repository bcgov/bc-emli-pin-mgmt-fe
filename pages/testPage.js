export default function TestPage() {
    const env_var = process.env.TEST_VAR
    return (
        <div>
            <h1>Test Page {env_var}</h1>
        </div>
    )
}
