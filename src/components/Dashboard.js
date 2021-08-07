import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export default function Dashboard() {
    const [error, setError] = useState("")
    const history = useHistory()
    const { currentUser, logout} = useAuth()
    function handleLogout() {
        setError("")

        try {
            logout()
            history.push("/login")
          } catch {
            setError("Failed to log out")
          }
    }
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Fantasy Cricket</h2>
                    {error && <Alert variant="danger">{error}</Alert> }
                    <strong>Email:</strong> {currentUser && currentUser.email}
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick={handleLogout}>
                    Log Out
                </Button>
            </div>
        </>
    )
}
