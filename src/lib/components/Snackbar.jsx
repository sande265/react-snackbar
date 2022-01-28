import React, { useEffect, useRef } from 'react';
import './styles/styles.css';
import PropTypes from 'prop-types';

/**
 * Usage
 * (type): 'error' for Errors & 'success' for Success Messages, : String,
 * (message): Actual Message, : String,
 * (duration): Duration for how long to show the snackbar, : Integer || Number,
 * (open): State for open or close, : Boolean,
 * (closeAlert): Function to be executed when closing snackbar: Function,
 */

const Snackbar = ({ type, message, duration, open, closeAlert }) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js";
        script.integrity = "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM";
        script.crossOrigin = "anonymous"
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        const link = document.createElement("link")
        link.href = "https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css";
        link.rel = "stylesheet"
        document.head.appendChild(link);
        return () => {
            document.body.removeChild(link);
        }
    }, []);

    useEffect(() => {
        let timer1 = setTimeout(() => {
            closeAlert()
        }, duration ? duration : 3000);

        return () => {
            clearTimeout(timer1);
        };
    }, []);

    const onClickOutside = (ref) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    closeAlert()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const wrapperRef = useRef(null);
    onClickOutside(wrapperRef);

    return <div ref={wrapperRef} className={`snackbar alert-with-icon alert alert-dismissible ${open ? 'show fadeIn' : 'fadeOut'} fade alert-${type ? type === 'success' ? 'success' : type === 'error' ? 'danger' : 'info' : 'success'}`} role="alert">
        <button type="button" className="close" aria-label="Close" onClick={closeAlert}>
            <span aria-hidden="true">×</span>
        </button>
        <span data-notify="icon" className={`${type === 'error' ? 'ri-alert-fill' : 'ri-checkbox-circle-line'}`}></span>
        <span>{message}</span>
    </div>
}

Snackbar.propTypes = {
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    duration: PropTypes.number,
    open: PropTypes.bool.isRequired,
    closeAlert: PropTypes.func.isRequired
};

export default Snackbar;
